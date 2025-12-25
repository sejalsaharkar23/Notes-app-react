import "./SearchBar.css";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="search-box">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>

      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
