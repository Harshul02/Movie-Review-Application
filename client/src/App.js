import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try{
      const response  = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response);
      setMovies(response);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  })

  return (
    <div className="App display-4">
      Hello World
    </div>
  );
}

export default App;
