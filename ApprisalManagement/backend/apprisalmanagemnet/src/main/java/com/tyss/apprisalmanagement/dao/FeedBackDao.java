package com.tyss.apprisalmanagement.dao;

import com.tyss.apprisalmanagement.dto.FeedBackBean;
import com.tyss.apprisalmanagement.dto.Response;

public interface FeedBackDao {
	public Response addFeedBack(FeedBackBean bean) ;
	public Response getAllFeedBack() ;
	public Response updateFeedBack(FeedBackBean bean);
	public Response removeFeedBack(int id);

}
