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
@Data
@Table(name="skill_info")
public class SkillBean implements Serializable {

	@Id
	@GeneratedValue
	@Column(name="skill_id")
	private Integer skillId;
	
	@Column(name="skill_name")
	private String skillName;
	
	@Column(name="score")
	private Double score;
	
	@Column(name="weightage")
	private Double weightage;
	
	@Column(name="potential")
	private Double potential;
	
	@JoinColumn(name ="user_id")
	@ManyToOne(cascade = CascadeType.MERGE)
	private UserBean bean;



}
