import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try{
      const response  = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home movies={movies} />} />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path='/layout' element={<Layout />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
