package com.easyticket.easyticket.Service;

import com.easyticket.easyticket.Models.Movie;
import com.easyticket.easyticket.Repository.MovieRepository;
import com.easyticket.easyticket.dtos.MovieDetailsRegisterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    private MovieRepository repository;

    @Autowired
    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    public Movie saveMovie(MovieDetailsRegisterDto movieDetailsRegisterDto){
        Movie movie = new Movie();
        movie.setImageUrl(movieDetailsRegisterDto.getImageUrl());
        movie.setTitle(movieDetailsRegisterDto.getTitle());
        movie.setRating(movieDetailsRegisterDto.getRating());
        movie.setReleaseDate(movieDetailsRegisterDto.getReleaseDate());
        movie.setDuration(movieDetailsRegisterDto.getDuration());
        return repository.save(movie);
    }

    public Movie findMovieById(String id){
        return repository.findMovieById(id);
    }

    public List<Movie> getAllMovies(){
        return repository.findAll();
    }
}
