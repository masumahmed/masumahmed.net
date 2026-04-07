import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from "framer-motion";

import './styles/App.scss'

import Home from './pages/Home'
import Project from './pages/Projects'
import Blog from './pages/Blog'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import BlogEntry from './pages/BlogEntry'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the URL contains the redirect query parameter
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      // Decode the URI component and navigate to the correct path
      navigate(decodeURIComponent(redirectPath));
    }
  }, [location, navigate]);

  return <>
    <div className='app'>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:hash/:titleURL" element={<BlogEntry />} />
          <Route path="/blog/:hash" element={<BlogEntry />} />
          <Route path="/photos" element={<Photos />} />
          <Route path='/contact' element={<Contact />} />

          {/* Redirects */}
          <Route path="/*" element={<h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>404</h1>} />
          <Route path="/resume" element={<meta httpEquiv='refresh' content='0; URL=/MasumAhmedResume.pdf' />} />
          <Route path="/linkedin" element={<meta httpEquiv='refresh' content='0; URL=https://www.linkedin.com/in/masum-ahmed/' />} />
          <Route path="/github" element={<meta httpEquiv='refresh' content='0; URL=https://github.com/masumahmed' />} />
        </Routes>
      </AnimatePresence>
    </div>
  </>
}

export default App;