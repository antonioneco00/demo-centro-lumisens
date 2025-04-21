import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="relative xl:h-[95vh] h-screen">
        <Image
          src="/hero-image.png"
          alt="Background Image"
          fill
          className="object-cover object-[center_100%]" // Cambiar 100% o center por el valor que convenga según la imagen
          priority
        />

        {/* Overlay oscuro con blur */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />
      </div>
    </div>
  );
}
