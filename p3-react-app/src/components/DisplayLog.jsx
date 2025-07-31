function DisplayLog({logs}) {
  return (  
    <div>
      {logs.length > 0 ? logs.map((log, index) => (
        <div key={index}>
          <span>{log}</span><br />
        </div>
      )) : 'You have no logs at the moment.'}
    </div>
  );
}

export default DisplayLog;