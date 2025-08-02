function BtnDelete ({ id, logs, setLogs }) {
  
  const handleClick = () => {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
    localStorage.setItem('LogEntries', JSON.stringify(updatedLogs))
  }
  
  return (  
    <button onClick={handleClick}>Delete</button>
  );
}

export default BtnDelete;