import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import FeaturedPerformance from "./components/sections/FeaturedPerformance";
import WhyGarage71 from "./components/sections/WhyGarage71";
import Gallery from "./components/sections/Gallery";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedPerformance />
        <WhyGarage71 />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
