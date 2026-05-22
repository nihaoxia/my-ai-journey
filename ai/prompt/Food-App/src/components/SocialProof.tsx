import { motion } from 'framer-motion';

const partners = ['Basil Kitchen', 'Urban Eats', 'Green Bowl', 'City Pizza'];
const testimonials = [
  {
    quote: 'Foodiez turned dinner planning into a joy. The delivery is reliable, and the menu selection always feels premium.',
    name: 'Mia Thompson',
    role: 'Marketing lead'
  },
  {
    quote: 'I love the live tracking and the curated restaurant list. Great deals and fast delivery every time.',
    name: 'Noah Patel',
    role: 'Product designer'
  }
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative overflow-hidden py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 rounded-[2rem] bg-white px-6 py-10 shadow-soft sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Trusted by locals</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Foodiez powers the fastest deliveries from restaurants you love.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Join thousands of diners who rely on Foodiez for premium restaurant access, real-time updates, and flawless customer service.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {partners.map((partner) => (
                <div key={partner} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl font-semibold text-brand">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
                <div className="mt-5 flex gap-1 text-orange-400" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
