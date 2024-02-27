const Search = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search Tasks"
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
