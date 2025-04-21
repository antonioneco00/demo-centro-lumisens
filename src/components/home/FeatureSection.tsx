import { features } from "@/lib/features";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      id="about"
    >
      {/* Wave */}
      <div className="absolute top-0">
        <svg
          viewBox="0 0 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-screen"
        >
          <path
            d="M900 26L862.5 20.8C825 15.7 750 5.3 675 3.2C600 1 525 7 450 14.7C375 22.3 300 31.7 225 34C150 36.3 75 31.7 37.5 29.3L0 27V0H37.5C75 0 150 0 225 0C300 0 375 0 450 0C525 0 600 0 675 0C750 0 825 0 862.5 0H900V26Z"
            fill="url(#paint0_linear_102_20)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_102_20"
              x1="0"
              y1="24.8131"
              x2="900"
              y2="24.8131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.6" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lines 4 */}
      <div className="absolute bottom-0">
        <svg
          width="307"
          height="283"
          viewBox="0 0 307 283"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56 0.99999C146.571 58.6396 131.682 134.873 199.921 162.143C304.288 203.852 296.074 246.846 306 283"
            stroke="url(#paint0_linear_81_19)"
          />
          <path
            d="M37 0.99999C127.571 58.6396 112.682 134.873 180.921 162.143C285.288 203.852 277.074 246.846 287 283"
            stroke="url(#paint1_linear_81_19)"
          />
          <path
            d="M19 0.99999C109.208 58.6396 94.3796 134.873 162.345 162.143C266.295 203.852 258.114 246.846 268 283"
            stroke="url(#paint2_linear_81_19)"
          />
          <path
            d="M0 0.99999C90.5707 58.6396 75.6824 134.873 143.921 162.143C248.288 203.852 240.074 246.846 250 283"
            stroke="url(#paint3_linear_81_19)"
          />
          <circle
            cx="233.5"
            cy="120.5"
            r="29.5"
            fill="url(#paint4_linear_81_19)"
            fillOpacity="0.5"
          />
          <circle
            cx="108.748"
            cy="221.748"
            r="32"
            transform="rotate(129.474 108.748 221.748)"
            stroke="url(#paint5_linear_81_19)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_81_19"
              x1="306.62"
              y1="283"
              x2="56.2568"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_81_19"
              x1="287.62"
              y1="283"
              x2="37.2568"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_81_19"
              x1="268.618"
              y1="283"
              x2="18.1345"
              y2="1.1494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_81_19"
              x1="250.62"
              y1="283"
              x2="0.256819"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_81_19"
              x1="216"
              y1="99.5"
              x2="254"
              y2="142"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.05" />
              <stop offset="1" stopColor="var(--color-blue-500)" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_81_19"
              x1="108.748"
              y1="189.248"
              x2="108.748"
              y2="254.248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Sobre nosotros
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">
                Somos un centro de bienestar ubicado en Madrid especializado en
                técnicas de relajación a través de la luminoterapia y la
                sonoterapia. Nuestro equipo está formado por terapeutas
                certificados con años de experiencia.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-gray-300 text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* <Image
            alt="Product screenshot"
            src="/about-image.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            priority
          /> */}
          <Image
            src="/about-image.png"
            alt="about image"
            width={500}
            height={500}
            className="w-auto h-auto object-contain drop-shadow-three rounded-tl-3xl rounded-br-3xl shadow-[10px_10px_0] shadow-blue-500/60"
          />
        </div>
      </div>
    </div>
  );
}
