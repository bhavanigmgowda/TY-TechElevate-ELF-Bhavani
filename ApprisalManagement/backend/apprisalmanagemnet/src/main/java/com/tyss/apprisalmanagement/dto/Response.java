package com.tyss.apprisalmanagement.dto;

import java.util.List;

import lombok.Builder;
import lombok.Data;
@Builder
@Data
public class Response {
	
	private int statusCode;

	private String message;

	private String description;


	private List<ApprisalBean> apprisal;
	
	private List<FeedBackBean> feedBack;
	
	private List<GoalBean> goal;
	
	private List<SkillBean> skill;
	
	private List<UserBean> user;


	
	
}
