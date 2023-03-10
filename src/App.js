
import './App.css';
import Todo from './Screens/Todo';
import { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (

    <div className="App">
      <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />

      <div className="MainContainer">
        <Todo searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
