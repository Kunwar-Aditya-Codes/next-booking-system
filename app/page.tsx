import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';

export default function Home() {
  return (
    <main className=''>
      <Hero />

      {/* Restaurant Card */}
      <section className='p-6 grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
        <MovieCard />
      </section>
    </main>
  );
}
