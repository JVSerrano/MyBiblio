import { useState } from 'react';
import './App.css';
import AddBooks from './components/AddBooks';
import BookList from './components/BookList';
import SearchBook from './components/SearchBook';

function App() {

  const [listState, setListState] = useState([])


  return (
<div className="App">
  <div className="header">
    <h1 className="titleClass">Mis libros</h1>
    <SearchBook listState={listState} setListState={setListState}/>
    
  </div>

  <div className="content">
    <div className="bookLists">
      <h3>Leídos</h3>
      <BookList readState={true} listState={listState} setListState={setListState} />
      
      <h3>No leídos</h3>
      <BookList readState={false} listState={listState} setListState={setListState} />
    </div>

    <div className="addClass">
      <AddBooks setListState={setListState} />
    </div>
  </div>
</div>

  );
}

export default App;
