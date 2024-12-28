import React from 'react'

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div className="navbar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default Navbar;
  