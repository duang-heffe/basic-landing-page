import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Locations from "@/components/locations/Locations";
import TrackRecord from "@/components/track-record/TrackRecord";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a40]">
      <Header />
      <Hero />
      <Locations />
      <TrackRecord />
      <Testimonials />
      <Footer />
    </main>
  );
}
