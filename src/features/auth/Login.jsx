import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import NavBarAuth from "./components/NavBarAuth";
import Spinner from "../../shared/components/layout/Spinner";

export default function Login() {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    try {
      console.log(data);
      setLoading(true)
      //Simulando el login
      //TODO: Conexion con API
      setTimeout(() => {
        navigate("/dashboard")
        setLoading(false)
      }, 3000)
    } catch (error) {
      const status = error.message;
      if (status === "Network Error") {
        // setAlert({ message: "Error de conexión, intenta más tarde" });
        // setLoading(false);
        return;
      }
    }
  };

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NavBarAuth />
      <div className="flex min-h-screen flex-col items-center justify-center p-1">
        <div className="md:w-1/4 sm:w-1/2 lg:w-1/4 sm:m-10 p-6 rounded-xl shadow border border-gray-200">
          <h1 className="text-black tracking-tighter font-semibold text-2xl">
            Tu dinero bajo control
          </h1>
          <h1 className="text-gray-400 tracking-tighter text-2xl font-semibold ">
            Inicia Sesión en Moneta
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-6">
            <div className="space-y-4 mb-2">
              <div className="space-y-2">
                <label className="font-semibold block" htmlFor="email">
                  Correo Electronico*
                </label>
                <input
                  type="email"
                  name="email"
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
                  <Link
                    to="/auth/recovery-password"
                    className="text-gray-600 hover:underline"
                  >
                    Olvide mi contraseña
                  </Link>
                </div>
                <div className="flex flex-row border border-gray-200 rounded-lg items-center relative">
                  <input
                    name="password"
                    className={`w-full p-2 rounded-lg border pr-10 focus:outline-none focus:ring-1 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200"
                    }`}
                    type={isVisible ? "password" : "text"}
                    {...register("password", {
                      required: {
                        message: "La contraseña es obligatoria",
                        value: true,
                      }
                    })}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    type="button"
                    onClick={toggleVisible}
                  >
                    {isVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p role="alert" className="text-red-700 text-sm text-center">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <button className="bg-emerald-700 text-white w-full mt-8 py-2 font-medium rounded-lg hover:bg-emerald-600">
              {loading ? <Spinner/> : "Iniciar Sesión"}
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
  );
}
