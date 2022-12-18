import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="all">
        <Navbar />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
