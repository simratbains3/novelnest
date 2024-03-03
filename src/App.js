import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BookCard from './components/BookCard';
import BookRecommendation from './components/BookRecommendation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/library" element={<BookLibrary />} />
          <Route path="/recommendations" element={<BookRecommendation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function BookLibrary() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('books.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {books.map((book, index) => (
        <div className="col-md-3" key={index}>
          <BookCard {...book} />
        </div>
      ))}
    </div>
  );
}

export default App;
