function DisplayLog({logs}) {
  return (  
    <div>
      <p>{logs ? logs.map((log) => (
        <>
          <span>{log}</span>
          <br />
        </>
      )) : ''}</p>
    </div>
  );
}

export default DisplayLog;