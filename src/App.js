
import './App.css';
import {FilterTable} from './components/FilterTable'
import Dropdown from './components/Dropdown'
import Dropdowns from './components/DropdownTemplate'

const items = [
  {
    id:1,
    value: 'Blue',
  },
  {
    id:2,
    value: 'Green',
  },
  {
    id:3,
    value: 'Red',
  },
  {
    id:4,
    value: 'Purple',
  }
]

function App() {
  return (
    <div className="App">
      <Dropdown title = 'select item' items = {items}/>
      <Dropdowns/>

    </div>
  );
}

export default App;
