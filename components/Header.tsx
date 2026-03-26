import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
              <Image
                src="/pkm-logo.png"
                alt="PKM CENTER ITH Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-primary">PKM CENTER</h1>
              <p className="text-xs text-muted-foreground">ITH 2026</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden gap-8 sm:flex">
            <a
              href="#home"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#tim"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Lihat Tim
            </a>
            <a
              href="#tentang"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Tentang
            </a>
          </div>

          {/* Mobile Menu Button (optional) */}
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground sm:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
