import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Stats } from '@/components/Stats';
import { Gallery } from '@/components/Gallery';
import { CEOVideoSection } from '@/components/CEOVideoSection';
import { Testimonials } from '@/components/Testimonials';
import { Awards } from '@/components/Awards';
import { Partners } from '@/components/Partners';
import { PaymentInfo } from '@/components/PaymentInfo';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CartProvider } from '@/context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Stats />
          <Gallery />
          <CEOVideoSection />
          <Testimonials />
          <Awards />
          <Partners />
          <PaymentInfo />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Index;
