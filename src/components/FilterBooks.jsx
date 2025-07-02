import React, { useState, useEffect } from 'react';
import Books from './components/Books';

const FilterBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState('recentReleased');
  const [searchTerm, setSearchTerm] = useState('');
  const [mybooks, setMybooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('mybooks-list')) || [];
    setMybooks(savedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('mybooks-list', JSON.stringify(mybooks));
  }, [mybooks]);

  return (
    <>
      <Filter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Books
        selectedGenre={selectedGenre}
        searchTerm={searchTerm}
        mybooks={mybooks}
        setMybooks={setMybooks}
      />
    </>
  );
};

export default FilterBooks;
