import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-time order tracking',
    description: 'Follow your meal from kitchen prep to doorstep with live updates and arrival estimates.',
    position: 'left'
  },
  {
    title: 'Personalized recommendations',
    description: 'Receive curated meal suggestions based on your tastes, order history, and local favorites.',
    position: 'right'
  },
  {
    title: 'Lightning-fast checkout',
    description: 'Pay securely with saved payment methods and reorder your favorite meals in seconds.',
    position: 'left'
  },
  {
    title: 'Exclusive local restaurants',
    description: 'Tap into chef-driven eateries and neighborhood brands you won’t find on other apps.',
    position: 'right'
  }
];

export default function FeatureHighlights() {
  return (
    <section id="restaurants" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-16">
        {features.map((feature, index) => {
          const isLeft = feature.position === 'left';
          return (
            <div key={feature.title} className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="order-2 lg:order-1"
              >
                <div className="rounded-[2rem] bg-gradient-to-br from-orange-100 via-white to-white p-8 shadow-soft">
                  <div className="h-80 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,_107,_53,_0.15),_transparent_35%),linear-gradient(180deg,_#fff,_#feece8)] p-6">
                    <div className="h-full rounded-[1.5rem] bg-slate-950/95 p-6 text-white shadow-2xl">
                      <div className="flex items-center justify-between">
                        <span className="rounded-3xl bg-orange-500/15 px-4 py-2 text-sm font-semibold text-orange-700">
                          {feature.title}
                        </span>
                        <span className="text-xs uppercase tracking-[0.22em] text-slate-400">Live</span>
                      </div>
                      <div className="mt-10 space-y-4">
                        <div className="rounded-3xl bg-white/10 p-4">
                          <p className="text-sm font-semibold">24 min</p>
                          <p className="text-xs text-slate-300">average arrival</p>
                        </div>
                        <div className="rounded-3xl bg-white/10 p-4">
                          <p className="text-sm font-semibold">132 kitchens</p>
                          <p className="text-xs text-slate-300">active nearby</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="order-1 lg:order-2"
              >
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Feature</p>
                  <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{feature.title}</h3>
                  <p className="max-w-xl text-base leading-7 text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
