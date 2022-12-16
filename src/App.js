import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="all">
        <Navbar />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
