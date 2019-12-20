package com.tyss.taskmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.taskmanagement.dto.ProjectBean;
import com.tyss.taskmanagement.dto.Response;
import com.tyss.taskmanagement.service.ProjectService;

@CrossOrigin(origins = "*")
@RestController
public class ProjectController {

	@Autowired
	ProjectService service;

	@PostMapping(value = "/create-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response createProject(@RequestParam int count, @RequestBody ProjectBean bean) {
		System.out.println("================1" + bean);
		return service.createProject(bean, count);
	}

	@PostMapping(value = "/add-member", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response addMemeber(@RequestParam("email") String email, @RequestParam("projectId") int projectId,
			@RequestParam("newEmail") String newEmail) {
		return service.addMemeber(email, projectId, newEmail);
	}

	@PostMapping(value = "/update-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response updateComment(@RequestParam("bean") ProjectBean bean) {
		return service.updateProject(bean);
	}

	@PostMapping(value = "/get-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getProject(@RequestParam("projectId") int projectId) {
		return service.getProject(projectId);
	}

	@GetMapping(value = "/get-task-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getProject(@RequestParam("projectId") int projectId, @RequestParam("email") String email) {
		return service.getProject(projectId, email);
	}

	@GetMapping(value = "/get-members", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getAllMembers(@RequestParam("groupId") int groupId) {
		return service.getAllMembers(groupId);
	}

	@GetMapping(value = "/get-projects-by-email", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getProjectsById(@RequestParam("email") String email) {
		return service.getProjectsByEmail(email);
	}

	@GetMapping(value = "/search-members", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response searchMember(@RequestParam("name") String name, @RequestParam("groupId") int groupId) {
		return service.searchMember(name, groupId);
	}

	/**
	 * @role handler for removing user from the particular project group and
	 *       assigning his task to different user of an existing project
	 * @param groupId:  takes groupId from request
	 * @param newEmail: takes newEmail from request
	 * @param newEmail: takes removeEmail from request
	 * @return Response object
	 */
	@DeleteMapping(value = "/remove-user-from-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response removeUserFromProject(@RequestParam("groupId") int groupId,
			@RequestParam("newEmail") String newEmail, @RequestParam("removeEmail") String removeEmail) {
		return service.removeUserFromProject(groupId, newEmail, removeEmail);
	}

	@DeleteMapping(value = "/remove-user-from-create-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response removeUserFromProject(@RequestParam("projectId") int groupId,
			@RequestParam("email") String removeEmail) {
		return service.removeUserFromProject(groupId, removeEmail);
	}

	@GetMapping(value = "/search-members-for-project", produces = MediaType.APPLICATION_JSON_VALUE)
	public Response getUserInProject(@RequestParam("email") String email) {
		return service.getUserInProject(email);
	}

	@GetMapping("/get-poject-while-createtask")
	public Response getEmailsWhileCreatingTask(@RequestParam("email") String email,
			@RequestParam("projectName") String projectName) {
		return service.getProjectsWhileCreatingTask(email, projectName);
	}

}
