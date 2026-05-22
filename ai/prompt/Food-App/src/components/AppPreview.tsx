import { motion } from 'framer-motion';

const screens = [
  {
    title: 'Live delivery tracking',
    description: 'See your driver move through the city in real time and get precise ETA updates.'
  },
  {
    title: 'Favorites curated for you',
    description: 'Save best-selling meals and receive personalized chef picks every day.'
  },
  {
    title: 'Easy reorder',
    description: 'Tap into your most-loved orders and checkout instantly with one click.'
  }
];

export default function AppPreview() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">App preview</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            See the Foodiez app in action.
          </h2>
        </div>

        <div className="-mx-4 overflow-x-auto pb-4 sm:mx-0">
          <div className="inline-flex gap-6 px-4 sm:px-0">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                whileHover={{ y: -8 }}
                className="min-w-[280px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-white to-slate-100 p-5 shadow-inner">
                  <div className="h-full rounded-[1.5rem] bg-slate-950 p-5 text-white">
                    <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
                      <span>Foodiez</span>
                      <span>9:41</span>
                    </div>
                    <div className="space-y-5">
                      <div className="rounded-[1.5rem] bg-slate-800 p-4">
                        <p className="font-semibold text-slate-100">{screen.title}</p>
                        <p className="mt-2 text-sm text-slate-400">{screen.description}</p>
                      </div>
                      <div className="rounded-[1.5rem] bg-orange-500/15 p-4 text-sm text-orange-700">
                        Recommended for you
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{screen.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
