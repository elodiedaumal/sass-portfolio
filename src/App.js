import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Sidecomponent from './components/Sidecomponent';

function App() {
  return (
    <Router>
      <Sidecomponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
