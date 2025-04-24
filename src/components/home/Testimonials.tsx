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
    <div
      className="relative isolate px-6 py-24 sm:py-32 lg:px-8"
      id="testimonials"
    >
      {/* Corner left */}
      <div className="absolute top-0 left-0">
        <svg
          width="437"
          height="956"
          viewBox="0 0 437 956"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-1/3 sm:size-1/2 lg:size-4/5 xl:size-full"
        >
          <circle
            cx="26.0094"
            cy="26.0094"
            r="25.5094"
            transform="matrix(1 0 0 -1 69.3849 191.767)"
            stroke="url(#paint0_linear_57_22)"
          />
          <circle
            cx="17"
            cy="17"
            r="16.5"
            transform="matrix(1 0 0 -1 319 226)"
            stroke="url(#paint1_linear_57_22)"
          />
          <circle
            cx="34"
            cy="34"
            r="34"
            transform="matrix(1 0 0 -1 151 260)"
            fill="url(#paint2_linear_93_5)"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-449.096 719.188C-438.206 646.351 -415.496 572.094 -380.206 499.952C-232.306 197.608 80.5478 46.8997 318.573 163.336C346.9 177.193 372.89 194.208 396.449 213.944C356.631 145.888 299.257 90.0567 226.418 54.4252C3.52207 -54.6097 -279.798 66.7976 -406.396 325.596C-470.47 456.58 -482.118 597.654 -449.096 719.188Z"
            fill="url(#paint3_linear_57_22)"
            fillOpacity="0.5"
          />
          <path
            d="M406.78 212.051C406.257 211.184 405.731 210.32 405.203 209.458C363.535 141.488 304.449 85.433 230.102 49.0646C-0.289056 -63.6372 -289.977 55.3917 -416.933 314.923C-480.765 445.412 -491.306 586.574 -456.725 709.015C-456.495 709.828 -456.264 710.64 -456.03 711.451"
            stroke="url(#paint4_linear_57_22)"
            strokeOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M303.181 238.5C282.811 218.812 260.234 200.86 235.526 185.005C27.9003 51.7817 -251.662 117.161 -388.895 331.034C-421.64 382.066 -443.323 436.942 -454.538 492.731C-481.029 390.816 -467.648 281.133 -408.195 188.477C-290.728 5.40732 -37.887 -41.8659 156.541 82.8894C220.078 123.658 269.514 177.753 303.181 238.5Z"
            fill="url(#paint5_linear_57_22)"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_57_22"
              x1="31.6063"
              y1="52.0188"
              x2="22.7171"
              y2="6.25542"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.5" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_57_22"
              x1="17"
              y1="34"
              x2="17"
              y2="-2.37953e-07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.5" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_93_5"
              x1="34"
              y1="68"
              x2="34"
              y2="-1.95578e-07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.05" />
              <stop offset="1" stopColor="var(--color-blue-500)" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_57_22"
              x1="1.99999"
              y1="60.5"
              x2="389"
              y2="206"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop
                offset="1"
                stopColor="var(--color-blue-500)"
                stopOpacity="0.1"
              />
            </linearGradient>
            <linearGradient
              id="paint4_linear_57_22"
              x1="2.99995"
              y1="50.5"
              x2="395"
              y2="213"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop
                offset="1"
                stopColor="var(--color-blue-500)"
                stopOpacity="0.1"
              />
            </linearGradient>
            <linearGradient
              id="paint5_linear_57_22"
              x1="-6.08374e-05"
              y1="70"
              x2="304"
              y2="236"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop
                offset="1"
                stopColor="var(--color-blue-500)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Corner right */}
      <div className="absolute top-0 right-0">
        <svg
          width="289"
          height="277"
          viewBox="0 0 289 277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto size-2/5 sm:size-2/3 lg:size-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M320.548 -145.219C327.445 -98.1356 319.15 -48.4808 293.567 -4.03931C246.921 76.9922 156.422 117.025 69.2608 103.351C73.0411 105.927 76.9474 108.379 80.9774 110.699C167.133 160.295 277.182 130.658 326.778 44.5022C362.048 -16.7662 357.248 -90.1177 320.548 -145.219Z"
            fill="var(--color-blue-500)"
            fillOpacity="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M168.711 207.72C161.813 160.637 170.108 110.982 195.691 66.5403C242.337 -14.4912 332.836 -54.5243 419.997 -40.8503C416.217 -43.4261 412.311 -45.8782 408.281 -48.1981C322.125 -97.7943 212.076 -68.157 162.48 17.9988C127.21 79.2672 132.01 152.619 168.711 207.72Z"
            fill="var(--color-blue-500)"
            fillOpacity="0.5"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47.5"
            transform="matrix(1 0 0 -1 45 228.501)"
            fill="url(#paint0_linear_94_28)"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47"
            transform="matrix(1 0 0 -1 190 276.501)"
            stroke="url(#paint1_linear_30_517)"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47"
            transform="matrix(0 1 1 0 0 4.50098)"
            stroke="url(#paint2_linear_30_517)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94_28"
              x1="77.5"
              y1="80.001"
              x2="16.5"
              y2="17.501"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.05" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_30_517"
              x1="47.5"
              y1="0"
              x2="47.5"
              y2="95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_30_517"
              x1="47.5"
              y1="0"
              x2="47.5"
              y2="95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
                  fill="url(#paint0_linear_61_36)"
                  fillOpacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_61_36"
                    x1="92"
                    y1="26.5"
                    x2="1.49999"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="var(--color-blue-500)" />
                    <stop
                      offset="1"
                      stopColor="var(--color-blue-500)"
                      stopOpacity="0.7"
                    />
                  </linearGradient>
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
                  fill="url(#paint0_linear_61_35)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_61_35"
                    x1="28"
                    y1="51"
                    x2="160"
                    y2="45"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="var(--color-blue-500)" stopOpacity="0.4" />
                    <stop
                      offset="1"
                      stopColor="var(--color-blue-500)"
                      stopOpacity="0.2"
                    />
                  </linearGradient>
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
