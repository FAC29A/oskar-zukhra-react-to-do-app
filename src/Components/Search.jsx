const Search = () => {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search Tasks"
        onChange={console.log('Search Test')}
      ></input>
    </div>
  );
};

export default Search;
