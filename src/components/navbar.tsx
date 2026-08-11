import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          id="nav-logo-link"
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 transition-opacity hover:opacity-80 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-sm font-semibold text-white shadow-md shadow-indigo-500/20">
            A
          </span>
          <span>AnyName</span>
        </Link>
        <nav id="main-navigation" className="hidden items-center gap-6 md:flex">
          <Link
            id="nav-home-link"
            href="/"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            id="nav-features-link"
            href="#features"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Features
          </Link>
          <Link
            id="nav-about-link"
            href="#get-started"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            id="nav-cta-button"
            href="#get-started"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
