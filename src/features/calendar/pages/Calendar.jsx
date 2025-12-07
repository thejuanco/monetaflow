import { useState } from "react"
import ModalFormTransaction from "../components/ModalFormTransaction"
import SummaryMonth from "../components/SummaryMonth"

export default function Calendar() {
  const today = new Date()
  const nowDay = today.getDate()

  const [selectedDay, setSelectedDay] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 17))
  //States dialog
  const [isModalOpen, setIsModalOpen] = useState(false)

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeak = firstDay.getDay()

    const days = []

    //Dias del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for(let i = startingDayOfWeak - 1; i >= 0; i--){
      const date = prevMonthLastDay - i
      const key = `${year}-${month}-${date}`
      days.push({
        date,
        month: month - 1,
        transactions: [],
        isCurrentMonth: false,
        isToday: false
      })
    }

    //Día del mes actual
    const today = new Date()
    for(let i = 1; i <= daysInMonth; i++){
      const key = `${year}-${month + 1}-${i}`
      const isToday = today.getDate() === i && today.getMonth() === month && today.getFullYear() === year
      days.push({
        date: i,
        month,
        isCurrentMonth: true,
        isToday
      })
    }

    //Dias del mes siguiente
    const remainingDays = 42 - days.length
    for(let i = 1; i <= remainingDays; i++){
      const key = `${year}-${month + 2}-${i}`
      days.push({
        date: i,
        month,
        transactions: [],
        isCurrentMonth: false,
        isToday: false
      })
    }

    return days
  }

  const calendarDays = getDaysInMonth(currentDate)

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToDay = () => {
    setCurrentDate(new Date())
  }

  const getTotalForDay = (day) => day.transactions.reduce((sum, t) => sum + t.amount, 0) 

  return (
    <div className="flex-1 space-y-4 p-4 md:p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={previousMonth}
            className="p-2 border border-gray-200 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold tracking-tight">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <button
            onClick={nextMonth}
            className="p-2 border border-gray-200 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-gray-200 flex justify-center items-center py-2 px-3 hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nueva Transacción
          </button>
        </div>
      </div>

      <div className="p-4 border border-gray-200">
        {/*Calendar*/}
        <div className="grid grid-cols-7 gap-2">
          {/* Encabezados de días */}
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}

          {/*Calendar days*/}
          {calendarDays.map((day, index) => {
            //const total = getTotalForDay(day)

            return (
              <button
                key={index}
                onClick={() => { console.log(day); setSelectedDay(day)}}
                className={`min-h-[100px] border border-gray-200 p-2 hover:shadow-md text-left transition-all
                  ${!day.isCurrentMonth ? "bg-gray-100 text-gray-400" : "bg-white"}
                  ${day.isToday ? "border-green-600 border-2" : ""}
                  ${selectedDay?.date === day.date && selectedDay?.month === day.month ? "ring-2 ring-green-600" : ""}
                `}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-sm font-medium ${day.isToday ? "flex h-6 w-6 items-center justify-center" : ""}`}>
                    {day.date}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <SummaryMonth/>

      {/*Modal*/}
      <ModalFormTransaction
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

    </div>
  )
}
