export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
      
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
          Next.js App Skeleton
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Modern & Scalable <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Next.js Foundation
          </span>
        </h1>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Pondasi project Next.js yang bersih, terstruktur, dan siap untuk pengembangan fitur tingkat lanjut.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            id="hero-primary-cta"
            href="#features"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/35 active:scale-95"
          >
            Jelajahi Fitur
          </a>
          <a
            id="hero-secondary-cta"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 bg-white/50 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-800/80 active:scale-95"
          >
            Dokumentasi Next.js
          </a>
        </div>
      </div>
    </section>
  );
}
