import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
