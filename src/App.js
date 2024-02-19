import './App.css';
import GroupsContainer from './Components/GroupsContainer';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <header>To-Do App</header>
      <Search />
      <GroupsContainer />
    </div>
  );
}

export default App;
