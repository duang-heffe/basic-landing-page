export default function Header() {
  return (
    <header className="bg-[var(--color-black)]">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
        {/* Logo */}
        <div className="text-white text-lg sm:text-xl italic lowercase">
          hackeurope
        </div>
        
        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Date */}
          <div className="text-white text-sm italic">
            February 21, 2026
          </div>
          {/* Register button */}
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--color-black)] text-white text-xs sm:text-sm">
            Register Now
          </button>
        </div>
      </nav>
    </header>
  );
}

