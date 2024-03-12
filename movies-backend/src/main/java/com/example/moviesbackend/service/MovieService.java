package com.example.moviesbackend.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.moviesbackend.dao.MovieRepository;
import com.example.moviesbackend.model.Movie;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String id){
        return movieRepository.findMovieByImdbId(id);
    }
}
