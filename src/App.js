import React, { useState } from 'react';
import './App.css';
import GroupsContainer from './Components/GroupsContainer';
import Search from './Components/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <header>To-Do App</header>
      <Search onSearch={handleSearch} />
      <GroupsContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
