import React, { useState } from 'react'

const BookDetails = ({book, onClose}) => {
    const {title, authors, description, previewLink, inforLink} = book.volumeInfo;
  return (
    <div className='book-details'>
      <button onClick={onclose}>Close</button>
      <h2>{title}</h2>
      <p>{authors?.join(", ")}</p>
      <p>{description}</p>
      <button>
        <a href={preview} target='_blank' rel='noopener noreferrer'>Read Now</a>
      </button>
      <button>
        <a href={infoLink} target='_blank' rel='noopener noreferrer'> More Info</a>
      </button>

    </div>
  )
}

export default BookDetails
