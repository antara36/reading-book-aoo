import React, { useState } from 'react';
import Filter from './Filter';
import Books from './Books';

const FilterBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState('recentReleased');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Filter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Books selectedGenre={selectedGenre} searchTerm={searchTerm} />
    </>
  );
};

export default FilterBooks;
