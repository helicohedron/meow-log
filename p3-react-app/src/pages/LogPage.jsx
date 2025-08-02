import DisplayLog from '../components/DisplayLog';
import Header from '../components/Header';
import LogField from '../components/LogField';
import { useState, useEffect } from 'react';


function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = localStorage.getItem('LogEntries'); //fetch
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs)); 
    }
  }, []);


  return (  
    <div>
      <Header title='Daily Log' />
      <LogField logs={logs} setLogs={setLogs}/>
      <DisplayLog logs={logs} setLogs={setLogs}/>
    </div>
  );
}

export default Log;