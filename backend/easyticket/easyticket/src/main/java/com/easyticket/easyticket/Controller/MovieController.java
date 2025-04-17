package com.easyticket.easyticket.Controller;

import com.easyticket.easyticket.Models.Movie;
import com.easyticket.easyticket.Service.MovieService;
import com.easyticket.easyticket.dtos.MovieDetailsRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
    @PostMapping("/register")
    public ResponseEntity<Movie> registerMovie(@RequestBody MovieDetailsRegisterDto movieDetailsRegisterDto){
        Movie movie=movieService.saveMovie(movieDetailsRegisterDto);
        ResponseEntity<Movie> response = new ResponseEntity<>(movie, HttpStatus.CREATED);
        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable String id){
        Movie movie=movieService.findMovieById(id);
        ResponseEntity<Movie> response = new ResponseEntity<>(movie, HttpStatus.OK);
        return response;
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        List<Movie> movies=movieService.getAllMovies();
        ResponseEntity<List<Movie>> response = new ResponseEntity<>(movies, HttpStatus.OK);
        return response;
    }
}
