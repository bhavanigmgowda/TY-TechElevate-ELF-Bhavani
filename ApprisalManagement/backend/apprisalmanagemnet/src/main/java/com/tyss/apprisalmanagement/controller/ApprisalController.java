package com.tyss.apprisalmanagement.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.apprisalmanagement.dao.ApprisalDaoImpl;
import com.tyss.apprisalmanagement.dto.ApprisalBean;
import com.tyss.apprisalmanagement.dto.Response;

@CrossOrigin(origins = "*")
@RestController
public class ApprisalController {

	@Autowired
	ApprisalDaoImpl apprisalDao;

	@GetMapping(value = "/get-all-apprisal", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getApprisal() {
		return apprisalDao.getAllApprisal();
	}
	
	@PostMapping(value = "/add-apprisal", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response addApprisal(@RequestBody ApprisalBean apprisalBean) {
		return apprisalDao.addApprisal(apprisalBean);
	}
	
	@PostMapping(value = "/remove-apprisal", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response removeApprisal(@RequestParam("apprisalId") int id) {
		return apprisalDao.removeApprisal(id);
	}
	
	@PostMapping(value = "/update-apprisal", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response updateApprisal(@RequestBody ApprisalBean apprisalBean) {
		return apprisalDao.updateApprisal(apprisalBean);
	}
}
