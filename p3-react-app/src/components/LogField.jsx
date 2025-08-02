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
      <form onSubmit={handleSubmit} className='flex flex-col'> 
        <div className='flex justify-center'>
          <div>
            <textarea 
              placeholder='What is one thing that made you happy today?'
              rows={1}
              cols={50}
              maxLength={35} 
              value={log}
              onChange={(e) => setLog(e.target.value)}
              style={{resize: 'none'}}
              className='p-2 border-2 rounded-md border-[var(--color-brightBlue)] text-[var(--color-darkBlue)] bg-orange-50 m-10 mb-5'
            />
            <div className='flex justify-end'>
              <input type='submit' value='Save' className='p-5 pt-2 pb-2 border-1 rounded-md bg-[var(--color-brightBlue)] text-[var(--color-offWhite)] mr-10'></input>
            </div>
          </div>
        </div>
      </form>
   </div>
  );
}

export default LogField;