package com.easyticket.easyticket.Repository;

import com.easyticket.easyticket.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {
    Movie save(Movie movie);
    Movie findMovieById(String id);

    @Override
    List<Movie> findAll();
}
