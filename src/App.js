import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BookLibrary from './components/BookLibrary';
import BookRecommendation from './components/BookRecommendation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/novelnest" element={<HeroBanner />} />
          <Route path="/library" element={<BookLibrary />} />
          <Route path="/recommendations" element={<BookRecommendation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
