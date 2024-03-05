import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

function BookLibrary() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + "/books.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="container "
      style={{
        padding: "10px 10px",
        marginTop: "20px",
      }}
    >
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-3" key={index} style={{
            padding: "10px 10px",
          }}>
            <BookCard {...book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookLibrary;
