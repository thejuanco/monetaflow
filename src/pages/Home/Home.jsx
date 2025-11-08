import { Link } from "react-router";
import NavBarHome from "../../shared/components/layout/NavBarHome";
import FooterHome from "../../shared/components/layout/FooterHome";

export default function Home() {
  return (
    <>
      <NavBarHome />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Administra tus finanzas con facilidad
                  </h1>
                  <p className="text-gray-600 md:text-xl">
                    Moneta-Flow te ayuda a controlar tus gastos, ahorrar dinero
                    y alcanzar tus metas financieras.
                  </p>
                </div>
                <div className="flex flex-row space-x-3">
                  <Link
                    className="group flex items-center py-2 px-3 bg-emerald-700 text-gray-100 rounded-lg font-medium
                      transform transition-all duration-300 origin-left hover:scale-x-105"
                    to="/auth/signup"
                    >
                    Empieza gratis
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6 transform transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/auth/signin"
                    className="py-2 px-3 border hover:bg-gray-100 border-emerald-600 text-emerald-700 rounded-lg font-medium"
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              </div>
              <div>
              <div className="flex items-center justify-center bg-slate-100 w-full h-full">
                <img
                  src="/img/Moneta-Inicio.png"
                  alt="Dashboard de Moneta-Flow"
                  className="w-full max-w-[750px] lg:max-w-[900px] rounded-lg object-cover transition-transform hover:scale-105 shadow"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/*Features*/}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-gradient-to-b from-white via-gray-100 to-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-600 px-3 text-gray-100 py-1 text-sm">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Todo lo que necesitas para administrar tus finanzas
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Moneta-Flow ofrece herramientas potentes y fáciles de usar para ayudarte a tomar el control de tu
                  dinero.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Seguimiento de Gastos</h2>
                <p>Registra y categoriza tus gastos para saber exactamente dónde va tu dinero.</p>
              </div>
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Presupuestos Personalizados</h2>
                <p>Crea presupuestos adaptados a tus necesidades y recibe alertas cuando te acerques a tus límites.</p>
              </div>
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Análisis Financiero</h2>
                <p>Visualiza tus finanzas con gráficos intuitivos y reportes detallados.</p>
              </div>
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Gestión de Cuentas</h2>
                <p>Conecta tus cuentas bancarias y tarjetas para tener una visión completa de tus finanzas.</p>
              </div>
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Seguridad Avanzada</h2>
                <p>Tus datos financieros están protegidos con encriptación de nivel bancario.</p>
              </div>
              <div className="max-w-sm p-6 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Educativo</h2>
                <p>Accede a artículos y recursos para mejorar tus conocimientos financieros.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterHome/>
    </>
  );
}
