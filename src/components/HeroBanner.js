import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div
      className="jumbotron text-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.png"})`, // Update with the path to the uploaded image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        opacity: 0.9,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Text color set to white for visibility
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "60px",
          borderRadius: "10px",
        }}
      >
        <h1
          className="display-3"
          style={{
            fontSize: "50px",
            fontFamily: "serif",
            marginBottom: "40px",
          }}
        >
          "A writer only begins a book. A reader finishes it."
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "80px" }}>
          — SAMUEL JOHNSON
        </p>
        <div className="flex justify-center">
          <Link
            to="/library"
            className="btn btn-primary btn-lg bg-dark"
            style={{
              padding: "15px 30px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
              marginRight: "60px",
              border: " black",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#000fff")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            See Catalogue
          </Link>
          <Link
            to="/recommendations"
            className="btn btn-primary btn-lg bg-dark"
            style={{
              padding: "15px 30px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
              border: " black",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0069d9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Search Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
