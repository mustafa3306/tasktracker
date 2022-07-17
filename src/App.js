import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from "react";

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show && <Header />}
      <AddTask />
      <Tasks />
      
    </div>
  );
}

export default App;
