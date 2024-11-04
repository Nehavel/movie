import './App.css';
import Home from './pages/Home';
import Search from './pages/Search'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/search' element={<Search/>} />
    </Routes>
    // <Home/>
  );
}

export default App;
