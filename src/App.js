import './App.css';
import { Routes, Route } from 'react-router-dom';
//[React-slick]
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//[pages]
import Homepage from './pages/Home-page';
import Moviespage from './pages/Movie-page';
import Playspage from './pages/Plays-page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviespage />} />
      <Route path="/plays" element={<Playspage />} />
    </Routes>
  );
}

export default App;
