import { motion } from 'framer-motion';

const trustData = [
  { label: '4.9/5 rating', value: 'Trusted by 25k+' },
  { label: '20 min avg.', value: 'Delivery speed' },
  { label: '500+ restaurants', value: 'Local partners' }
];

function AppStoreButton({ label, subtitle }: { label: string; subtitle: string }) {
  return (
    <button className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">{subtitle}</p>
        <p className="text-sm font-semibold text-slate-900">{label}</p>
      </div>
      <span className="text-xl">→</span>
    </button>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-16 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-orange-100 to-transparent" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-brand">
            Food delivered in minutes
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your favorite food, delivered fast.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Discover handcrafted menus, live delivery tracking, and instant offers from top local kitchens. Foodiez makes every order feel effortless.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:items-center">
            <AppStoreButton label="Download on the App Store" subtitle="Available on" />
            <AppStoreButton label="Get it on Google Play" subtitle="Available on" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustData.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-4 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-orange-50 px-6 py-8 shadow-soft sm:px-8 sm:py-10">
            <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-orange-100 blur-3xl" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/80 blur-2xl" />
            <div className="relative rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Fresh order</p>
                  <h2 className="mt-2 text-lg font-semibold">Sushi express</h2>
                </div>
                <span className="rounded-2xl bg-slate-800 px-3 py-1 text-xs text-slate-300">On the way</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold">Avocado nigiri</p>
                    <p className="text-xs text-slate-400">2 items · 18 min</p>
                  </div>
                  <p className="text-sm font-semibold text-brand">$14.99</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="font-medium text-slate-100">Live tracker</p>
                  <p className="mt-2 text-slate-400">Your delivery partner is 2 minutes away from pickup.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Fresh meals', 'Top-rated kitchens', 'Cashback deals', '24/7 support'].map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-soft transition"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
