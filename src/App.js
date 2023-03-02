import './App.css';
import SignIn from './components/SignIn';
import Game from './components/Game';
import  Home from './components/Home';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom"
import AuthDetails from './components/AuthDetails';
import Highscorelist from './components/Highscorelist';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/signin" element={<><SignIn /><AuthDetails /></>} />
          <Route path="/highscorelist" element={<Highscorelist />} />
        </Routes>
      </div>
    </>
  )
}

export default App

