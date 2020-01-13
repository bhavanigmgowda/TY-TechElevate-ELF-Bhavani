package com.tyss.apprisalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tyss.apprisalmanagement.dto.UserBean;

public interface UserRepository extends JpaRepository<UserBean,Integer> {

}
