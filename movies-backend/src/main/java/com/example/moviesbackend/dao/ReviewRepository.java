package com.example.moviesbackend.dao;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.moviesbackend.model.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
    
}
