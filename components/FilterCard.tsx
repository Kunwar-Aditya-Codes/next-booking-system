type FilterCardProps = {
  title: string;
  options: string[];
};

const FilterCard = ({ title, options }: FilterCardProps) => {
  return (
    <div className='flex flex-col space-y-2 items-start'>
      <h1 className='text-lg underline underline-offset-2'>{title}</h1>
      <div className='flex items-center flex-wrap gap-x-2'>
        {options.map((option) => (
          <div key={option} className='flex items-center space-x-1'>
            <input type='checkbox' />
            <p className=''>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterCard;
