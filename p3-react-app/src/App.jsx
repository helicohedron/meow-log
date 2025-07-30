import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Today from './pages/Today';
import Log from './pages/Log';
import PastLogs from './pages/PastLogs';
import WhyLog from './pages/WhyLog';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index/>
        <Route element={<Today />} path='today' />
        <Route element={<Log />} path='log/:id' />
        <Route element={<PastLogs />} path='pastlogs' />
        <Route element={<WhyLog />} path='whylog' />
        <Route element={<PageNotFound />} path='*'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;