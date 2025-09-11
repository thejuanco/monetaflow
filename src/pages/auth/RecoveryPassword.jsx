import { Link } from "react-router";
import NavBarAuth from "../../components/layout/auth/NavBarAuth";

export default function RecoveryPassword() {
  let errors = false;
  return (
    <>
      <NavBarAuth />
      <div className="flex justify-center items-center pt-12">
        <div className="md:w-1/4 sm:w-1/2 lg:w-1/5 sm:m-10 border border-gray-100 p-6 rounded-xl shadow">
          <h1 className="text-black font-semibold text-2xl">
            Tu dinero bajo control
          </h1>
          <h1 className="text-gray-400 text-2xl font-semibold ">
            Recupera tu contraseña
          </h1>
          <form onSubmit={() => {}} className="mt-12 mb-4">
                    <div className="space-y-2 mb-12 ">
                    <label className="font-semibold" htmlFor="email">
                        Correo electronico*
                    </label>
                    <input
                        type="email"
                        name="email"
                        className={`w-full p-2 rounded-lg border mt-2 focus:outline-none focus:ring-1 ${
                            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200"
                          }`}
                        placeholder="Ingresa tu correo electrónico"
                        // {...register('email', {required: true})}
                    />
                    {errors.email?.type === "required" && (
                        <p role="alert" className="text-red-700 text-sm text-center">El correo es obligatorio</p>
                    )}
                    </div>
                    <button className="bg-blue-700 text-white w-full mt-8 py-2 font-medium rounded-lg hover:bg-blue-600">
                    Continuar
                    </button>
                </form>
          <p className="text-sm m-2 mb-4 text-gray-500">
            Te enviaremos un correo a tu cuenta de correo para restablecer tu
            contraseña.
          </p>
          <div className="flex flex-row justify-center hover:underline">
            <Link to="/">Volver a inicio</Link>
          </div>
        </div>
      </div>
    </>
  );
}
