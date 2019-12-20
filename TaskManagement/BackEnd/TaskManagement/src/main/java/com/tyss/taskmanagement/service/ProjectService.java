package com.tyss.taskmanagement.service;

import com.tyss.taskmanagement.dto.ProjectBean;
import com.tyss.taskmanagement.dto.Response;

public interface ProjectService {
	public Response createProject(ProjectBean bean, int count);

	public Response updateProject(ProjectBean bean);

	public Response getProject(int projectId);

	public Response getProject(int projectId, String Email);

	public Response getAllMembers(int groupId);

	public Response getProjectsByEmail(String email);

	public Response searchMember(String name, int groupId);

	public Response addMemeber(String architectEmail, int groupId, String newEmail);

	public Response removeUserFromProject(int groupId, String newEmail, String removeEmail);

	public Response removeUserFromProject(int groupId, String removeEmail);
	
	public Response getUserInProject(String email);
	
	public Response getProjectsWhileCreatingTask(String email ,String projectname );

}
