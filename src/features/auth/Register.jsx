import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import NavBarAuth from "./components/NavBarAuth";

export default function Register() {
  const {
    register,
    watch,
    formState: {errors},
    handleSubmit
  } = useForm()
  //Navegación
  const navigate = useNavigate()

  const onSubmit = (data) => {
    try {
      navigate("/auth/confirmation-email")
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBarAuth />
      <div className="flex justify-center items-center pt-12">
        <div className="lg:w-1/4 md:w-1/4 sm:w-1/2 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black font-semibold text-2xl">
            Ahorra como nunca antes
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Crea tu cuenta en Moneta
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="name">
                  Nombre*
                </label>
                <input
                  name="name"
                  type="text"
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Tu nombre"
                {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red-700 text-sm text-center">
                    El nombre es obligatorio
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="lastName">
                  Apellido*
                </label>
                <input
                  name="lastName"
                  placeholder="Tu apellido"
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                {...register("lastName", { required: {value: true} })}
                />
                {errors.lastName?.type === "required" && (
                  <p role="alert" className="text-red-700 text-sm text-center">
                    El apellido es obligatorio
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="email">
                  Correo Electronico*
                </label>
                <input
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="ejemplo@correo.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "El correo es obligatorio",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El correo no es válido",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="text-red-700 text-sm text-center">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-semibold" htmlFor="email">
                    Contraseña*
                  </label>
                </div>
                <input
                  className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200"
                  }`}
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es obligatoria",
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña es demasiado corta",
                    },
                  })}
                />
                {errors.password && (
                  <p role="alert" className="text-red-700 text-sm text-center">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <button className="bg-emerald-700 text-white w-full mt-8 py-2 font-medium rounded-lg hover:bg-emerald-600">
              Continuar
            </button>
          </form>
          <p className="text-sm m-2 mb-4 text-gray-500">
            Una vez que te registras aceptas nuestros términos y condiciones.
          </p>
          <div className="flex justify-center">
            <p>¿Ya tienes una cuenta?&nbsp;</p>
            <Link to="/auth/signin" className="hover:underline">
              Inicia sesión
            </Link>
          </div>
          {/* <div className="flex items-center justify-between mb-6 mt-4">
                      <div className="border-t border-gray-300 w-1/2"></div>  
                      <span className="text-gray-500 mx-3">O</span>
                      <div className="border-t border-gray-300 w-1/2"></div>
                    </div> */}
        </div>
      </div>
    </>
  );
}
