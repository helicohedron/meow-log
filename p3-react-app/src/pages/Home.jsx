import Header from '../components/Header';
import { Link } from 'react-router';

function Home() {
  return (  
    <>
      <Header title='LogLife' text='Daily notes that make a life'/>
      <Link to='/today'>Begin Logging</Link>
    </>
  );
}

export default Home;