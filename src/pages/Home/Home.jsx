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
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Moneta-Flow te ayuda a controlar tus gastos, ahorrar dinero
                    y alcanzar tus metas financieras.
                  </p>
                </div>
                <div className="space-x-2">
                  <Link
                    className="py-2 px-3 bg-emerald-700 text-gray-100 rounded-lg font-medium"
                    to="/auth/signup"
                  >
                    Empieza gratis
                  </Link>
                  <Link
                    to="/auth/signin"
                    className="py-2 px-3 border border-emerald-600 text-emerald-700 rounded-lg font-medium"
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              </div>
              <div>
              <div className="flex items-center justify-center bg-slate-100">
                <img
                  src="/img/Moneta-Inicio.png"
                  alt="Dashboard de Moneta-Flow"
                  className="rounded-lg object-cover transition-transform hover:scale-105 shadow"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/*Features*/}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Todo lo que necesitas para administrar tus finanzas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Moneta-Flow ofrece herramientas potentes y fáciles de usar para ayudarte a tomar el control de tu
                  dinero.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterHome/>
    </>
  );
}
