function BtnDelete ({ id, logs, setLogs }) {
  
  const handleClick = () => {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
    localStorage.setItem('LogEntries', JSON.stringify(updatedLogs))
  }
  
  return (  
    <button onClick={handleClick} className='border-1 border-[var(--color-burntOrange)] p-2 mr-2 text-[var(--color-offWhite)] rounded-md text-sm'>Delete Log</button>
  );
}

export default BtnDelete;