import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  return (
    <Router>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <Routes>
        <Route
          path="/home"
          element={<Home searchTerm={searchTerm} selectedGenre={selectedGenre} />}
        />
        <Route
          path="/mybooks"
          element={<MyBooks searchTerm={searchTerm} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
