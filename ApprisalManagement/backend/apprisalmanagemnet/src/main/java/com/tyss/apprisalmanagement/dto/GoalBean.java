package com.tyss.apprisalmanagement.dto;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="goal_info")

@Data
public class GoalBean implements Serializable {

	@Id
	@GeneratedValue
	@Column(name="goal_id")
	private int goalId;
	
	@Column(name="goal_name")
	private String goalName;
	
	@Column(name="status")
	private String status;
	
	@Column(name="goal_sub_id")
	private String goalSubId;

	@JoinColumn(name="user_id")
	@ManyToOne(cascade = CascadeType.MERGE)
	private UserBean bean;


	
	
}
