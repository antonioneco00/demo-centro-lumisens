import FeatureSection from "@/components/home/FeatureSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description:
      "Welcome to our homepage. Here you will find information about our products and services.",
    openGraph: {
      title: "Home",
      description:
        "Welcome to our homepage. Here you will find information about our products and services.",
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
