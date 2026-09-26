import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ExploreSection from "@/components/home/ExploreSection";
import MissionSection from "@/components/home/MissionSection";
import JoinSection from "@/components/home/JoinSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return <div className="min-h-screen overflow-x-clip bg-[#f8f1eb] font-[family-name:var(--font-geist-sans)] text-[#38253d] selection:bg-[#e7b49f]">
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <BenefitsSection />
      <ExploreSection />
      <MissionSection />
      <JoinSection />
    </main>
    <Footer />
  </div>;
}
