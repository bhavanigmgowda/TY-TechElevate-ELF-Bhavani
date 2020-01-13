package com.tyss.apprisalmanagement.dto;

import java.io.Serializable;
import java.time.LocalDate;

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
@Table(name="feedback_info")
@Data
public class FeedBackBean implements Serializable {

	@Id
	@GeneratedValue
	@Column(name="feedBackId")
	private Integer feedBackId;
	
	@Column(name="feedBackDate")
	private LocalDate feedBackDate;
	
	@Column(name="rating")
	private Double rating;
	
	@Column(name="email")
	private String email;
	
	@Column(name="comment")
	private String comment;
	
	@JoinColumn(name="user_id")
	@ManyToOne(cascade = CascadeType.MERGE)
	private UserBean bean;

	
	
}
