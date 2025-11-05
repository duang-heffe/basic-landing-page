import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Locations from "@/components/locations/Locations";
import TrackRecord from "@/components/track-record/TrackRecord";
import Testimonials from "@/components/testimonials/Testimonials";
import Sponsor from "@/components/sponsor/Sponsor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-blue)]">
      {/* Header with spacing to show hero background */}
      <div className="px-1 pt-4 sm:px-2 sm:pt-6 lg:px-3 lg:pt-8">
        <Header />
      </div>
      <Hero />
      <Locations />
      <TrackRecord />
      <Testimonials />
      <Sponsor />
      <Footer />
    </main>
  );
}
