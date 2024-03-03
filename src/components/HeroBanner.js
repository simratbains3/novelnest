import React from 'react';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className="jumbotron text-center" style={{
      backgroundImage: `url(bg.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.8,
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 className="display-3" style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
        A World of Stories Awaits
      </h1>
      <Link to="/library" className="btn btn-primary btn-lg" style={{
        padding: '15px 30px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
      }} onMouseOver={(e) => e.target.style.backgroundColor = '#0069d9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
        Continue Reading
      </Link>
    </div>
  );
}

export default HeroBanner;