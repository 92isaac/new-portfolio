import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="all">
        <Navbar />
      <Routes>
        <Route path='/' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
