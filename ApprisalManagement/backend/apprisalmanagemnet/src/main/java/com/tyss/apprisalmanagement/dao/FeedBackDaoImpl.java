package com.tyss.apprisalmanagement.dao;

import org.springframework.beans.factory.annotation.Autowired;

import com.tyss.apprisalmanagement.dto.FeedBackBean;
import com.tyss.apprisalmanagement.dto.Response;
import com.tyss.apprisalmanagement.repository.FeedBackRepository;
import com.tyss.apprisalmanagement.util.ResponseContainerUtil;

public class FeedBackDaoImpl implements FeedBackDao {
	@Autowired(required=false)
	FeedBackBean bean;

	@Autowired
	FeedBackRepository feedBackRepository;
	@Override
	public Response addFeedBack(FeedBackBean bean) {
		Response response=null;
		System.out.println(bean);
		if(bean!=null) {
			feedBackRepository.save(bean);
			response=ResponseContainerUtil.fillerSuccess("apprisal create successfully");
		} else {
			response=ResponseContainerUtil.fillerFailure("apprisal not create successfully");
		}
		return response;
	}
	
	@Override
	public Response getAllFeedBack() {
		Response response=null;
		
			response=ResponseContainerUtil.fillerSuccess("all apprisal found successfully");
			response.setFeedBack(feedBackRepository.findAll());
		
		return response;
	}
	
	@Override
	public Response updateFeedBack(FeedBackBean bean) {
		return null;
	}
	
	@Override
	public Response removeFeedBack(int id) {
		Response response=null;
		FeedBackBean feedBackBean=feedBackRepository.findById(id).get();
		if(feedBackBean!=null) {
			feedBackRepository.deleteById(id);
			response=ResponseContainerUtil.fillerSuccess("apprisal deleted successfully");
		} else {
			response=ResponseContainerUtil.fillerFailure("apprisal not deleted successfully");
		}
		return response;
	}
}
