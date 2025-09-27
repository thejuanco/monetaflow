import { Link } from "react-router";
import NavBarHome from "../../components/layout/home/NavBarHome";
import FooterHome from "../../components/layout/home/FooterHome";

export default function Home() {
  return (
    <>
      <NavBarHome />
      <main className="flex-1">
        <div className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
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
            </div>
          </div>
        </div>
      </main>
      <FooterHome/>
    </>
  );
}
