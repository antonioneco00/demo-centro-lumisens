import { tiers } from "@/lib/products";

export default function PricingSection() {
  return (
    <div
      className="relative bg-linear-120 from-background to-blue-50 dark:to-blue-950 isolate px-6 py-24 sm:py-32 lg:px-8"
      id="pricing"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-blue-600">Precios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Servicios y Precios
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Ofrecemos una variedad de servicios adaptados a tus necesidades. Desde
          clases sueltas hasta bonos mensuales, tenemos opciones para todos los
          gustos y presupuestos.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg sm:grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-6xl lg:grid-cols-3 gap-x-10">
        {tiers.map((tier, key) => (
          <div
            key={key}
            className="relative bg-background flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-blue-600/60 sm:p-10"
          >
            <div className="absolute top-3 right-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="2" fill="var(--color-blue-500)" />
                <circle cx="14" cy="2" r="2" fill="var(--color-blue-500)" />
                <circle cx="26" cy="26" r="2" fill="var(--color-blue-500)" />
                <circle cx="2" cy="2" r="2" fill="var(--color-blue-500)" />
                <circle cx="26" cy="14" r="2" fill="var(--color-blue-500)" />
              </svg>
            </div>
            <h3 className="text-blue-600 text-base/7 font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight">
                {tier.price}
              </span>
            </p>
            {tier.info && (
              <h3 className="text-blue-500 text-base/7 font-semibold">
                {tier.info}
              </h3>
            )}
            <p className="mt-auto text-base/7">{tier.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
