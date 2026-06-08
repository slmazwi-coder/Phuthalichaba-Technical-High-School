
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Crest } from './components/Crest';
import { Academics } from './components/Academics';
import { TechnicalStreams } from './components/TechnicalStreams';
import { ExamPrep } from './components/ExamPrep';
import { Facilities } from './components/Facilities';
import { Admissions } from './components/Admissions';
import { Gallery } from './components/Gallery';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Home page - Hero + News + Footer */}
            <Route path="/" element={
              <>
                <Hero />
                <News />
              </>
            } />
            {/* Individual section pages */}
            <Route path="/about" element={<><Hero /><About /><Crest /></>} />
            <Route path="/academics" element={<><Hero /><Academics /><TechnicalStreams /><ExamPrep /></>} />
            <Route path="/facilities" element={<><Hero /><Facilities /></>} />
            <Route path="/admissions" element={<><Hero /><Admissions /></>} />
            <Route path="/gallery" element={<><Hero /><Gallery /></>} />
            <Route path="/news" element={<><Hero /><News /></>} />
            <Route path="/contact" element={<><Hero /><Contact /></>} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}