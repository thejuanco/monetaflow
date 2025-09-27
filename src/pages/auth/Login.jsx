import { Link } from "react-router"
import NavBarAuth from "../../components/layout/auth/NavBarAuth"

export default function Login() {
    let errors = false
  return (
    <>
        <NavBarAuth/>
        <div className="flex justify-center items-center pt-12">
            <div className="md:w-1/3 sm:w-1/2 lg:w-1/4 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
                <h1 className="text-black font-semibold text-2xl">
                    Tu dinero bajo control
                </h1>
                <h1 className="text-gray-500 text-2xl font-semibold ">
                    Inicia Sesión en Moneta
                </h1>
                <form className="mt-10 mb-6">
                    <div className="space-y-4 mb-2">
                        <div className="space-y-2">
                            <label className="font-semibold block" htmlFor="email">
                                Correo Electronico*
                            </label>
                            <input
                                name="email"
                                type="email"
                                className={`w-full p-2 rounded-lg border focus:outline-none focus:ring-1 ${
                                    errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200"
                                }`}
                                // placeholder="ejemplo@correo.com"
                                // {...register("email", { required: true })}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="font-semibold" htmlFor="email">
                                    Contraseña*
                                </label>
                                <Link
                                    to="/auth/recovery-password"
                                    className="text-gray-600 hover:underline"
                                >
                                    Olvide mi contraseña
                                </Link>
                            </div>
                            <div className="flex flex-row border border-gray-200 rounded-lg items-center relative">
                                <input
                                    className={`w-full p-2 rounded-lg border pr-10 focus:outline-none focus:ring-1 ${
                                    errors.password
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-200"
                                    }`}
                                    // type={isVisible ? "password" : "text"}
                                    // {...register("password", { required: true })}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-700 text-white w-full mt-8 py-2 font-medium rounded-lg hover:bg-blue-600">
                        Iniciar Sesión
                    </button>
                </form>
                <div className="flex justify-center">
                    <p className="text-gray-600">¿Aún no tienes cuenta?&nbsp;</p>
                    <Link to="/auth/signup" className="hover:underline text-gray-600">
                        Registrate
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
