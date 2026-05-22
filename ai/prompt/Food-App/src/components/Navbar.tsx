import { motion } from 'framer-motion';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Restaurants', href: '#restaurants' },
  { label: 'Reviews', href: '#social-proof' },
  { label: 'Download', href: '#download' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Foodiez
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#download"
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft shadow-orange-200 transition hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Get the App
        </motion.a>
      </nav>
    </header>
  );
}
