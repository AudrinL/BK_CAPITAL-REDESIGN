import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import MarketSection from "@/components/home/MarketSection";
import NewsPublicationsSection from "@/components/home/NewsPublicationsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <MarketSection />
      <NewsPublicationsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}
