import Navbar from "./Components/Navbar/Navbar.jsx";
import {Routes, Route} from "react-router-dom";
import Movies from "./Components/pages/Movies.jsx";
import Home from "./Components/pages/Home.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  )
}

export default App
