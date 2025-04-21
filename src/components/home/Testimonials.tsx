import Image from "next/image";

export default function Testimonials() {
  const clients = [
    {
      name: "Ana Pérez",
      quote:
        "La terapia de luminoterapia me ha ayudado a reducir mi ansiedad y mejorar mi estado de ánimo. ¡Recomiendo este centro al 100%!",
        image: "/testimonial-1.png",
      },
      {
        name: "Esteban López",
        quote:
        "La sonoterapia con cuencos tibetanos fue una experiencia increíble. Me sentí relajado y renovado después de la sesión.",
        image: "/testimonial-0.png",
      },
    {
      name: "Paula Martínez",
      quote:
        "La combinación de luminoterapia y sonoterapia ha sido transformadora para mí. He notado una gran mejora en mi bienestar general.",
        image: "/testimonial-2.png",
    },
  ];

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="testimonials">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Testimonios
        </h1>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Lo que dicen nuestros clientes sobre nosotros y nuestras terapias.
        <br />
        Nos encanta escuchar sus experiencias y cómo hemos impactado en su
        bienestar.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 lg:max-w-6xl lg:grid-cols-3 gap-x-8">
        {clients.map((client) => (
          <div
            key={client.name}
            className="relative flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-blue-600/60 sm:p-10 overflow-hidden"
          >
            {/* Left circle */}
            <div className="absolute bottom-0 left-0">
              <svg
                width="135"
                height="24"
                viewBox="0 0 135 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="113"
                  r="113"
                  fill="url(#paint0_radial_15_58)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_15_58"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(56.487 23.4805) rotate(95.4539) scale(146.684 126.484)"
                  >
                    <stop stopColor="var(--color-blue-500)" stopOpacity={0.2} />
                    <stop offset="1" stopColor="var(--color-blue-500)" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Right circle */}
            <div className="absolute bottom-0 right-0">
              <svg
                width="160"
                height="56"
                viewBox="0 0 160 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="115"
                  cy="115"
                  r="115"
                  fill="url(#paint0_radial_15_57)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_15_57"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(117.347 30.5102) rotate(90.674) scale(199.504)"
                  >
                    <stop
                      stopColor="var(--color-blue-500)"
                      stopOpacity={0.05}
                    />
                    <stop
                      offset="1"
                      stopColor="var(--color-blue-500)"
                      stopOpacity={0.2}
                    />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-gray-500 font-sans mb-6">
              “{client.quote}”
            </p>
            <div className="flex pt-3 mt-auto border-t border-gray-900/10">
              <div className="relative self-center h-[50px] w-full max-w-[50px] mr-4 overflow-hidden rounded-full">
                <Image
                  src={client.image}
                  alt="Testimonio"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-blue-600 text-base/7 font-semibold">
                  {client.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
