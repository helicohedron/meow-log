import BtnCattify from './BtnCattify';
import BtnDelete from './BtnDelete'

const date = new Date();
const displayDate = date.toDateString();
const [ dayWeek, month, day, year ] = displayDate.split(' ');

function DisplayLog({logs, setLogs}) {
  return (  
    <div className='flex flex-col items-center border-1 mt-5'>
      {logs.length > 0 ? logs.map((log) => (
        <div key={log.id} className='border-2 min-w-1/2 max-w-3/4 p-5'>
          <div className='text-[var(--color-burntOrange)]'>
            <p>{dayWeek} | {month} {day}, {year}</p>
          </div>
          <div>
            <p>{log.text}</p>
          </div>
          <div>
            <BtnDelete id={log.id} logs={logs} setLogs={setLogs}/>
            <BtnCattify text={log.text} alt='A cat with text.'/>
          </div>
        </div>
      )) : 'You have no logs at the moment.'}
    </div>
  );
}

export default DisplayLog;