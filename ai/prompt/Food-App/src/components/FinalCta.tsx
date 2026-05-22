import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section id="download" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-soft sm:px-10 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Download Foodiez</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get your food faster than ever.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Install the app and start exploring top-rated restaurants, instant offers, and delivery that arrives hot and on time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="#" className="rounded-3xl bg-white px-5 py-4 text-left text-slate-950 shadow-soft transition hover:-translate-y-1 hover:bg-slate-100">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">App Store</p>
              <p className="mt-2 text-lg font-semibold">Download</p>
            </a>
            <a href="#" className="rounded-3xl bg-white px-5 py-4 text-left text-slate-950 shadow-soft transition hover:-translate-y-1 hover:bg-slate-100">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Google Play</p>
              <p className="mt-2 text-lg font-semibold">Download</p>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
