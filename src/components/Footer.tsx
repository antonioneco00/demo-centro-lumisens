import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative bg-linear-120 from-background to-blue-50 dark:to-blue-950"
      id="footer"
    >
      {/* Left Ball */}
      <div className="absolute bottom-20">
        <svg
          width="101"
          height="164"
          viewBox="0 0 101 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19" cy="82" r="82" fill="url(#paint0_linear_98_50)" />
          <defs>
            <linearGradient
              id="paint0_linear_98_50"
              x1="19"
              y1="164"
              x2="19"
              y2="6.51968e-09"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" stopOpacity="0.05" />
              <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Ball */}
      <div className="absolute right-0 top-20">
        <svg
          width="106"
          height="168"
          viewBox="0 0 106 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="84.31"
            cy="84.31"
            r="83"
            transform="rotate(-99.6453 84.31 84.31)"
            stroke="url(#paint0_linear_58_31)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_58_31"
              x1="84.31"
              y1="0.809967"
              x2="84.31"
              y2="167.81"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-blue-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
            <div className="mb-6 mx-auto text-center sm:mx-0 sm:text-left max-w-[360px]">
              <Link href="#" className="ml-0 flex items-center">
                <Image
                  alt="Logo"
                  src="/logo.png"
                  width={100}
                  height={100}
                  className="mx-auto sm:mx-0 w-auto h-auto object-contain"
                />
              </Link>
              <p className="mb-4 sm:mb-8 text-base text-gray-400 leading-relaxed">
                Bienestar a través de la luz y el sonido.
              </p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-6 text-xl font-bold">Links</h2>
              <ul>
                <li>
                  <Link
                    href="#about"
                    className="mb-6 inline-block text-base hover:text-blue-400 duration-300"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="mb-6 inline-block text-base hover:text-blue-400 duration-300"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="mb-6 inline-block text-base hover:text-blue-400 duration-300"
                  >
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">Información</h2>
              <ul className="flex flex-col w-fit mx-auto text-left">
                <li className="flex items-center space-x-2 mb-4">
                  <ClockIcon className="w-6" />
                  <span className="inline-block text-base duration-300">
                    Lunes a Viernes:
                    <br />
                    10:00 - 20:00
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <MapPinIcon className="w-6" />
                  <span className="inline-block text-base duration-300">
                    Calle de la Luz, 17
                    <br />
                    28004 Madrid
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <PhoneIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-blue-400">
                    <a href="tel:+34622111234">622 111 234</a>
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <EnvelopeIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-blue-400">
                    <a href="mailto:info@lumisens.es">info@lumisens.es</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 LumiSens. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
