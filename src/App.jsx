import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-moving-grid text-slate-200 relative">
        <Navbar /> 

        <main className="relative z-10 pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}