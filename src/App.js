
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
