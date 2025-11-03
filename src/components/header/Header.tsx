export default function Header() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
        {/* Logo */}
        <div className="text-white text-lg sm:text-xl font-semibold">
          hackeurope
        </div>
        
        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Register button */}
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm rounded">
            Register Now
          </button>
        </div>
      </nav>
    </header>
  );
}

