import React from 'react';

const BookCard = ({ book, onClick }) => {
    const { title, authors, imageLinks } = book.volumeInfo;
    return (
      <div className="book-card" onClick={() => onClick(book)}>
        <img src={imageLinks?.thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{authors?.join(", ")}</p>
      </div>
    );
  };
  export default BookCard;