package com.tyss.apprisalmanagement.dto;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="user_info")
@Data
public class UserBean implements Serializable{

	
	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "first_name")
	private String FirstName;
	
	@Column(name = "last_name")
	private String LastName;

	@Column(name = "date_of_joining")
	private LocalDate dateOfJoining;
	
	@Column(name = "date_of_birth")
	private LocalDate dateOfBirth;
	
	@Column(name = "designation")
	private String designation;
	
	@Column(name = "role")
	private String role;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "mgr_id")
	private Integer mgrId;


	
}
