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

import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;


@Data
@Entity
@Table(name="apprisal_info")
@JsonRootName("Apprisal_info")
public class ApprisalBean implements Serializable{


	@Id
	@GeneratedValue
	@Column(name = "appraisal_id")
	private Integer appraisalId;
	
	@Column(name = "date_of_appraisal")
	private LocalDate dateOfAppraisal;
	
	@Column(name = "per_given_by_mgr")
	private Double perGivenByMgr;
	
	@Column(name = "per_given_by_hr")
	private Double perGivenByHr;
	
	@Column(name = "total_per_of_inc")
	private Double totalPerOfInc;
	

	@JoinColumn(name = "user_id")
	@ManyToOne(cascade = CascadeType.MERGE)
	private UserBean bean;


	
	
	
}
