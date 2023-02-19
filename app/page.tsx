import Hero from './components/Hero';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Restaurant Card */}
      <section className='p-6 grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
        <RestaurantCard />
      </section>
    </main>
  );
}
