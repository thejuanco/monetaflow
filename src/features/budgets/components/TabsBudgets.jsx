import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import ActiveBudgets from "./ActiveBudgets"
import BudgetHistory from "./BudgetHistory"
import AnalysisBudgets from "./AnalysisBudgets"

const categories = [
    {
        name: "Activo"
    },
    {
        name: "Historial"
    },
    {
        name: "Análisis",
    }
]

export default function TabsBudgets() {
    return (
        <div className="justify-center pt-2">
            <div className="">
                <TabGroup>
                    <TabList className="flex border border-gray-200">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="border border-gray-200 px-3 py-1 text-gray-800 font-medium bg-gray-300 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:cursor-pointer data-selected:bg-gray-50 data-selected:data-hover:bg-gray-50"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        <TabPanel><ActiveBudgets /></TabPanel>
                        <TabPanel><BudgetHistory /></TabPanel>
                        <TabPanel><AnalysisBudgets /></TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
