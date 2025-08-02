import { cattify } from '../services/cattify';
import { useState } from 'react';

function BtnCattify( { text } ) {
  
  const [cat, setCat] = useState(null);

  const handleClick = async() => {
    try{
      const cat = await cattify({text});
      console.log('Result:', cat.url);
      setCat(cat.url);
    } catch (error) {
      console.error('The cat ran away. Sorry.', error);
    }
  }

  const handleRemove = () => {
    setCat(null);
  }
  
  return (  
    <>
      <button onClick={handleClick}>Cattify</button>
      {cat && (
        <>
          <button onClick={handleRemove}>Remove Cat</button>
          <img src={cat}/>
        </>
      )}
    </>
  );
}

export default BtnCattify; 
