import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CekJangkauan from "@/components/CekJangkauan";
import PaketInternet from "@/components/PaketInternet";
import KenapaKami from "@/components/KenapaKami";
import Testimoni from "@/components/Testimoni";
import TentangSales from "@/components/TentangSales";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CekJangkauan />
      <PaketInternet />
      <KenapaKami />
      <Testimoni />
      <TentangSales />
      <FAQ />
      <Footer />
      <FloatingWA />
    </main>
  );
}
