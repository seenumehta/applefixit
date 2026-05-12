import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BrandsGrid from './components/BrandsGrid';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <WhyChooseUs />
      <BrandsGrid />
      <Reviews />
      <Locations />
      <ContactForm />
    </main>
  );
}
