import Header from '../components/Header';
import DateTime from '../components/DateTime';
import LogField from '../components/LogField';


function Log() {
  return (  
    <div>
      <Header title='Log' />
      <DateTime />
      <LogField />
    </div>
  );
}

export default Log;