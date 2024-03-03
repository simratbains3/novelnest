import React from 'react';

function BookCard({ title, author, coverImage, rating }) {
  // Function to render star rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆');
    }
    return stars.join(' ');
  };

  return (
    <div className="col-md-3" style={{ width: '300px' }}> {/* Fixed width */}
      <div className="card mb-4" style={{ height: '450px' }}> {/* Fixed height */}
        {coverImage ? (
          <img src={coverImage} className="card-img-top" alt={title} onError={(e) => {
            e.target.src = 'bg.png'; // Set default image
            e.target.onError = null; // Prevent repeated error triggers
          }} />
        ) : (
          <img src="bg.png" className="card-img-top" alt={title} />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">by {author}</p>
          <p className="card-text">{renderStars(rating)}</p> 
        </div>
      </div>
    </div>
  );
}

export default BookCard;