import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FeatureHighlights from './components/FeatureHighlights';
import AppPreview from './components/AppPreview';
import PromoBanner from './components/PromoBanner';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <FeatureHighlights />
        <AppPreview />
        <PromoBanner />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
