package com.tyss.apprisalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyss.apprisalmanagement.dto.ApprisalBean;

public interface ApprisalRepository extends JpaRepository<ApprisalBean, Integer> {

}
