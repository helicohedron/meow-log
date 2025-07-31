import DisplayLog from '../components/DisplayLog';
import Header from '../components/Header';
import LogField from '../components/LogField';
import { useState, useEffect } from 'react';


function Log() {
  // const [log, setLog] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = localStorage.getItem('logEntry'); //fetch
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs)); 
    }
  }, []);

  // add delete option
  
  return (  
    <div>
      <Header title='Daily Log' />
      <LogField logs={logs} setLogs={setLogs}/>
      <DisplayLog logs={logs}/>
    </div>
  );
}

export default Log;