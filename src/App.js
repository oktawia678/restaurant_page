import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import { Routes, Route } from "react-router-dom";
import {Menu} from "./pages/Menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="Menu" element={<Menu/>}/>
    </Routes>
  );
}

export default App;
