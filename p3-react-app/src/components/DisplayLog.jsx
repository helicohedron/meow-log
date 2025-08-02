import BtnDelete from './BtnDelete'

const date = new Date();
const displayDate = date.toDateString();

function DisplayLog({logs, setLogs}) {
  return (  
    <div>
      {logs.length > 0 ? logs.map((log) => (
        <div key={log.id}>
          <p>{displayDate}</p>
          <p>{log.text}</p>
          <BtnDelete id={log.id} logs={logs} setLogs={setLogs}/>
        </div>
      )) : 'You have no logs at the moment.'}
    </div>
  );
}

export default DisplayLog;