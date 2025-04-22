import FeatureSection from "@/components/home/FeatureSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lumisens",
    description:
      "Bienestar a través de la luz y el sonido.",
    openGraph: {
      title: "Lumisens",
      description: "Bienestar a través de la luz y el sonido.",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <Testimonials />
    </main>
  );
}
