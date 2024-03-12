package com.example.moviesbackend.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    
    @GetMapping()
    public ResponseEntity<String> allMovies() {
        return new ResponseEntity<String>("All Movies", HttpStatus.OK);
    }
    
}
