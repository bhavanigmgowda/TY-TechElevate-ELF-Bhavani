package com.tyss.apprisalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyss.apprisalmanagement.dto.FeedBackBean;

public interface FeedBackRepository extends JpaRepository<FeedBackBean,Integer> {

}
