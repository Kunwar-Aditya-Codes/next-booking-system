import FilterCard from '@/components/FilterCard';
import MovieCard from '@/components/MovieCard';
import Hero from '../../components/Hero';
import { FilterData } from '@/utils/FilterData';

export default function Search() {
  return (
    <div className=''>
      <Hero />
      <div className='flex'>
        <div className='hidden border-r-2 border-slate-900 md:inline-flex md:flex-[0.2] flex-wrap'>
          <div className='p-4 space-y-4 border-r border-slate-700'>
            <h1 className='text-2xl font-bold '>Filters</h1>
            <div className='space-y-4 '>
              {FilterData.map((filter) => (
                <FilterCard
                  key={filter.title}
                  title={filter.title}
                  options={filter.options}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex-grow flex-[0.8] py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
