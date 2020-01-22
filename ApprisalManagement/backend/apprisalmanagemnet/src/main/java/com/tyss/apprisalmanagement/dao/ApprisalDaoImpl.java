package com.tyss.apprisalmanagement.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.tyss.apprisalmanagement.dto.ApprisalBean;
import com.tyss.apprisalmanagement.dto.Response;
import com.tyss.apprisalmanagement.repository.ApprisalRepository;
import com.tyss.apprisalmanagement.util.ResponseContainerUtil;
@Service
public class ApprisalDaoImpl implements ApprisalDao {
	
	@Autowired(required=false)
	ApprisalBean bean;

	@Autowired
	ApprisalRepository apprisalRepository;

	public Response addApprisal(ApprisalBean bean) {
		Response response=null;
		System.out.println(bean);
		if(bean!=null) {
			apprisalRepository.save(bean);
			response=ResponseContainerUtil.fillerSuccess("apprisal create successfully");
		} else {
			response=ResponseContainerUtil.fillerFailure("apprisal not create successfully");
		}
		return response;
	}
	
	public Response getAllApprisal() {
		Response response=null;
		
			response=ResponseContainerUtil.fillerSuccess("all apprisal found successfully");
			response.setApprisal(apprisalRepository.findAll());
		
		return response;
	}
	public Response updateApprisal(ApprisalBean bean) {
		System.out.println(bean);
		Response response=null;
		ApprisalBean apprisalBean=apprisalRepository.findById(bean.getAppraisalId()).get();
		if(apprisalBean!=null) {
			apprisalBean.setDateOfAppraisal(bean.getDateOfAppraisal());
			apprisalBean.setPerGivenByHr(bean.getPerGivenByHr());
			apprisalBean.setPerGivenByMgr(bean.getPerGivenByMgr());
			apprisalBean.setTotalPerOfInc(bean.getTotalPerOfInc());
			apprisalRepository.save(apprisalBean);
			response=ResponseContainerUtil.fillerSuccess("apprisal updated successfully");
		} else {
			response=ResponseContainerUtil.fillerFailure("apprisal not updated successfully");
		}
		return response;
	}
	
	public Response removeApprisal(int id) {
		Response response=null;
		ApprisalBean apprisalBean=apprisalRepository.findById(id).get();
		if(apprisalBean!=null) {
			apprisalRepository.deleteById(id);
			response=ResponseContainerUtil.fillerSuccess("apprisal deleted successfully");
		} else {
			response=ResponseContainerUtil.fillerFailure("apprisal not deleted successfully");
		}
		return response;
	}
}
