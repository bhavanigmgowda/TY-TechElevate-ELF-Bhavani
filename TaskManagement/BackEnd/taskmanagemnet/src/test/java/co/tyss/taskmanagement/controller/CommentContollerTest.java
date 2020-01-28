package co.tyss.taskmanagement.controller;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
@RunWith(MockitoJUnitRunner.class)
public class CommentContollerTest {
	   private MockMvc mvc;
	   @Before
	   public void setup(){
	       MockitoAnnotations.initMocks(this); //without this you will get NPE
	   }
	@Test
	public void test() throws Exception {
		  String uri = "/get-All-comment";
		   MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
		      .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
		   
		   int status = mvcResult.getResponse().getStatus();
		   assertEquals(200, status);
		   String content = mvcResult.getResponse().getContentAsString();
		   //assertTrue(productlist.length > 0);
	}

}
