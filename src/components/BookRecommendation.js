import React, { useState, useEffect } from 'react';

/**
 * BookRecommendation Component
 * 
 * Fetches and displays book recommendations based on a user-selected genre.
 * Uses the Google Books API.
 * 
 * @returns {JSX.Element} - React component representing the book recommendation UI
 */
function BookRecommendation() {
  // State variables
  const [genre, setGenre] = useState(''); // Stores the selected genre
  const [recommendations, setRecommendations] = useState([]); // Stores fetched recommendations
  const apiKey = '#'; // Replace '#' with your actual Google Books API key

  /**
   * Handles changes to the genre input field.
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event
   */
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  /**
   * Fetches book recommendations from the Google Books API.
   * Updates the recommendations state.
   */
  const fetchRecommendations = async () => {
    if (!genre) return; // Don't fetch if no genre is selected

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        // Map API results to a simplified format
        setRecommendations(
          data.items.map((item) => ({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.[0] || 'Unknown',
          }))
        );
      } else {
        setRecommendations([]); // Clear recommendations if no results
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  // Fetch recommendations when the genre changes
  useEffect(() => {
    fetchRecommendations();
  }, [genre]);

  return (
    <div className='container'>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={genre}
          onChange={handleGenreChange}
          placeholder="Enter genre"
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #000' }}
        />
        <button 
          onClick={fetchRecommendations} 
          style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#000000', color: '#fff', border: 'none' }}
        >
          Search
        </button>
      </div>

      {recommendations.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {recommendations.map((book) => (
            <li key={book.title} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations found.</p>
      )}
    </div>
  );
}

export default BookRecommendation;