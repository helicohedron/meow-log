import { cattify } from '../services/cattify';
import { useState, Suspense } from 'react';

function BtnCattify( { text } ) {
  
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async() => {
    try{
      setLoading(true);
      const cat = await cattify({text});
      console.log('Result:', cat.url);
      setCat(cat.url);
    } catch (error) {
      console.error('The cat ran away. Sorry.', error);
    } finally {
      setLoading(false);
    }

  }
  

  const handleRemove = () => {
    setCat(null);
  }
  
  return (  
    <>
      <button onClick={handleClick} className='bg-[var(--color-burntOrange)] p-2 m-2 text-[var(--color-offWhite)] rounded-md text-sm'>Cattify</button>
      {cat && (
        <>
          <button onClick={handleRemove} className='bg-[var(--color-burntOrange)] p-2 m-2 text-[var(--color-offWhite)] rounded-md text-sm'>Remove Cat</button>
          {loading && <div className='text-[var(--color-yellowGray)] text-sm mt-2'>Chasing cat...</div>}
          <img src={cat}/>
        </>
      )}
    </>
  );
}

export default BtnCattify; 
