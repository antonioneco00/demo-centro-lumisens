import BackgroundImage from "@/components/backgrounds/BackgroundImage";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl py-38 sm:py-52 lg:py-60">
      {/* Imagen de fondo opcional */}
      <BackgroundImage />
      <div className="text-center">
        <h1 className="text-5xl text-gray-950 font-semibold font-mono tracking-tight text-balance sm:text-7xl">
          Lumisens
        </h1>
        <p className="mt-8 text-lg font-medium font-sans text-pretty text-gray-200 sm:text-xl/8">
          Bienestar a través de la luz y el sonido.<br/>
          Ofrecemos terapias innovadoras que combinan tecnología, relajación y conexión interior.
        </p>
      </div>
    </div>
  );
}
