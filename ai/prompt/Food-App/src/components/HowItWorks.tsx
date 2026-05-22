import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Browse restaurants',
    description: 'Discover curated menus from nearby favorites and exclusive local kitchens.',
    icon: '🥘'
  },
  {
    title: 'Order in seconds',
    description: 'Select your meal, customize it, and check out with a tap.',
    icon: '⚡'
  },
  {
    title: 'Fast delivery',
    description: 'Track your order live and receive it hot from kitchen to doorstep.',
    icon: '🚴'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Three steps to your next great meal.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Foodiez blends fast ordering, intelligent recommendations, and powered delivery to keep your cravings satisfied.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-100 text-2xl">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
