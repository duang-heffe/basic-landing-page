import HeroContent from './HeroContent';
import HeroSponsorCTA from './HeroSponsorCTA';
import HeroStatistics from './HeroStatistics';
import HeroSponsors from './HeroSponsors';
import HeroMap from './HeroMap';

export default function Hero() {
  return (
    // 100vh - header height
    <section className="w-full min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col bg-[var(--color-blue)]">
      {/* Hero section with content and map */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-8 flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto flex-1">
          {/* Left side: Content and CTA */}
          <div className="flex-1 w-full space-y-3 sm:space-y-4 lg:space-y-5 flex flex-col justify-center">
            <HeroContent />
            <HeroSponsorCTA />
          </div>
          {/* Map */}
          <HeroMap />
        </div>
      </div>
      
      {/* Statistics */}
      <HeroStatistics />
      
      {/* Sponsors */}
      <HeroSponsors />
    </section>
  );
}

