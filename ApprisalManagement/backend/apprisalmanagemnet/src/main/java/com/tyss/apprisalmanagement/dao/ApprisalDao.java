package com.tyss.apprisalmanagement.dao;

import org.springframework.stereotype.Service;

import com.tyss.apprisalmanagement.dto.ApprisalBean;
import com.tyss.apprisalmanagement.dto.Response;

@Service
public interface ApprisalDao {
	public Response addApprisal(ApprisalBean bean) ;
	public Response getAllApprisal() ;
	public Response updateApprisal(ApprisalBean bean);
	public Response removeApprisal(int id);

}
