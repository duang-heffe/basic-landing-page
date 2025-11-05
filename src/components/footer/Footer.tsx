export default function Footer() {
  return (
    <footer className="w-full px-4 py-2 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-white text-sm text-center">
          Made with ❤️ by{' '}
          <a href="https://lukemolony.com" className="underline hover:text-orange-500 transition-colors">
            Luke
          </a>
          {', '}
          <a href="https://emeroconnor.dev/" className="underline hover:text-orange-500 transition-colors">
            Emer
          </a>
          {' and '}
          <a href="https://www.linkedin.com/in/reuban-ramsden/" className="underline hover:text-orange-500 transition-colors">
            Reuben
          </a>
        </p>
      </div>
    </footer>
  );
}