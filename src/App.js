import Prestasi from './pages/Prestasi'
import Biodata from './pages/Biodata'
import Home from './pages/Home'
import './App.css';
import Navbar from './pages/Navbar';
import Galeri from './pages/Galeri'
import Portofolio from './pages/Portofolio'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Biodata' element={<Biodata />} />
        <Route path='/Prestasi' element={<Prestasi />} />
        <Route path='/Galeri' element={<Galeri />} />
        <Route path='/Portofolio' element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
