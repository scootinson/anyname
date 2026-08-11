import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50 py-12 text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 text-xs font-semibold text-white">
              A
            </span>
            <span>AnyName</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} AnyName Project. All rights reserved. Built with Next.js.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              id="footer-privacy-link"
              href="#"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              id="footer-terms-link"
              href="#"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
