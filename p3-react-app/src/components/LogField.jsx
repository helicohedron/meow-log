import { useEffect, useState } from 'react';

function LogField() {
  const [log, setLog] = useState('');

  useEffect(() => {
    localStorage.setItem('log', log);
    localStorage.setItem('date', new Date());
  }, [log]);


  return (  
   <div>
      <form>
        <textarea 
          placeholder='What did you notice today?'
          rows={5}
          cols={50}
          maxLength={150} 
          value={log}
          onChange={(e) => setLog(e.target.value)}
          aria-label='Daily log'
        />
        <input type='submit' value='Save'></input>
      </form>
   </div>
  );
}

export default LogField;