import { useState } from 'react';

function LogField( { logs, setLogs }) {

  const [log, setLog] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogs([...logs, log]);
    localStorage.setItem('logEntry', JSON.stringify([...logs, log]));
  }

  return (  
   <div>
      <form onSubmit={handleSubmit}>
        <textarea 
          type='text'
          placeholder='What did you notice today?'
          rows={5}
          cols={50}
          maxLength={150} 
          value={log}
          onChange={(e) => setLog(e.target.value)}
        />
        <input type='submit' value='Save'></input>
      </form>
   </div>
  );
}

export default LogField;