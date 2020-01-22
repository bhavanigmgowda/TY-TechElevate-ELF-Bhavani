package com.tyss.apprisalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyss.apprisalmanagement.dto.GoalBean;

public interface GoalRepository extends JpaRepository<GoalBean, Integer> {

}
