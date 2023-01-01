
import './App.css';
import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import { Routes, Route } from "react-router-dom";
import {Menu} from "./pages/menu/Menu";
import {Reservation} from "./pages/Reservation/Reservation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="menu" element={<Menu/>}/>
      <Route path="reservation" element={<Reservation/>} />
    </Routes>
  );
}

export default App;
