import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ searchTerm, onSearchChange, selectedGenre, onGenreChange }) => {
  const location = useLocation();

  const showFilterDropdown = location.pathname === '/home'; 

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/mybooks">MyBooks</Link>

      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
        />

    
        {showFilterDropdown && (
          <select value={selectedGenre} onChange={e => onGenreChange(e.target.value)}>
            <option value="all">All</option>
            <option value="recentReleased">Recent Releases</option>
            <option value="thriller">Thriller</option>
            <option value="fiction">Fiction</option>
            <option value="fantasy">Fantasy</option>
          </select>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
