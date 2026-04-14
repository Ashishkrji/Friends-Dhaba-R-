import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SignatureMenu from './components/SignatureMenu';
import About from './components/About';
import Gallery from './components/Gallery';
import ReservationForm from './components/ReservationForm';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-saffron selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <SignatureMenu />
        <About />
        <Gallery />
        <ReservationForm />
        <Offers />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
