import Header from '../components/Header';
import { Link } from 'react-router';

function Home() {
  return (  
    <>
      <Header title='Gratitude Log' text='Daily gratitude notes for happiness'/>
      <Link to='/log'>Begin Logging</Link>
    </>
  );
}

export default Home;