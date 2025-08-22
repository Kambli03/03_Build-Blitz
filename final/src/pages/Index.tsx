import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { CarConfigurator } from '@/components/layout/CarConfigurator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-showroom">
      <Header />
      <main>
        <Hero />
        <section id="configurator" className="py-20">
          <CarConfigurator />
        </section>
      </main>
    </div>
  );
};

export default Index;
