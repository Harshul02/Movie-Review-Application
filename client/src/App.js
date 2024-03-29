import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try{
      const response  = await axios.get("http://localhost:8080/api/v1/movies");
      setMovies(response.data);
    }catch(error){
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {
    try 
    {
        const response = await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`);
        const singleMovie = response.data;
        setMovie(singleMovie);
        setReviews(singleMovie.reviewIds);
    } 
    catch (error) 
    {
      console.error(error);
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
        <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/layout' element={<Layout />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
