import { useState } from 'react';

function LogField( { logs, setLogs }) {

  const [log, setLog] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = { id: Date.now(), text: log };
    const updatedLogs = [ ...logs, newLog ];

    setLogs(updatedLogs);
    localStorage.setItem('LogEntries', JSON.stringify(updatedLogs));
    setLog('');
  }

  return (  
   <div>
      <form onSubmit={handleSubmit}> 
        <textarea 
          type='text'
          placeholder='What is one thing that made you happy today?'
          rows={5}
          cols={50}
          maxLength={30} 
          value={log}
          onChange={(e) => setLog(e.target.value)}
        /><br />
        <input type='submit' value='Save'></input>
      </form>
   </div>
  );
}

export default LogField;