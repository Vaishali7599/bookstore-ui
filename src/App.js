import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookList from './components/BookList';
import reportWebVitals from './reportWebVitals';


const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async()=>{
    try{
      const harryPotter = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
      const sherlockHolmes = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
      setBooks([...harryPotter.data.items, ...sherlockHolmes.data.items])
    }catch (error){
      console.error(error)
    }
  };
  useEffect(()=>{
    fetchBooks();
  }, []);
  return <BookList books={books} />;
}

export default App
