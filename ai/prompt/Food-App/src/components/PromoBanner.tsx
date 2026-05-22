import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <section className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-12 text-white shadow-soft sm:px-10 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-100">Limited time</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Free delivery on your first order.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-orange-100/90">
              Start your Foodiez journey with no delivery fee, exclusive welcome offers, and our best-rated local eateries.
            </p>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <motion.a
              href="#download"
              whileTap={{ scale: 0.98 }}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-lg shadow-orange-500/20 transition hover:bg-slate-100"
            >
              Claim free delivery
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
