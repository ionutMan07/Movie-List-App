import logo from './logo.svg';
import './App.css';
import Header from './shared/Header'
import ListPage from './list/ListPage';

const items = [{id:1},{id:2}];

function App() {
  return (
    <div className="App">
      <Header />
      <ListPage items={items}/>
    </div>
  );
}

export default App;
