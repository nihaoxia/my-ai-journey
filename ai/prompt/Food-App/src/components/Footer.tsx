export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="space-y-4">
          <p className="text-2xl font-extrabold text-slate-900">Foodiez</p>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Premium food delivery with the best local restaurants, personalized offers, and a faster checkout.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Links</p>
            <nav className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="#how-it-works" className="transition hover:text-slate-900">How it works</a>
              <a href="#restaurants" className="transition hover:text-slate-900">Restaurants</a>
              <a href="#social-proof" className="transition hover:text-slate-900">Reviews</a>
            </nav>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Download</p>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <a href="#" className="transition hover:text-slate-900">App Store</a>
              <a href="#" className="transition hover:text-slate-900">Google Play</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Follow</p>
            <div className="flex items-center gap-3 text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm">IG</span>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm">TW</span>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm">FB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-sm text-slate-500 sm:px-8 lg:px-12">
        <p>© 2026 Foodiez. All rights reserved.</p>
      </div>
    </footer>
  );
}
