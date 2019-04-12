package com.anand.demo;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserResource {

	@Autowired
	private UserService userService;
	@GetMapping("/all")
	public Users getAllUser() {
		return userService.getUser();
		
	}
	
	@PostMapping("/add")
	public Users addUser(@RequestBody User user) {
		userService.addUser(user);
		return userService.getUser();
		
	}
	
	@DeleteMapping("/remove/{name}")
	public Users deleteUser(@PathVariable String name) {
		userService.getUser().getUsers().removeIf(u->u.getName().equals(name));
		return userService.getUser();
	}
	
	@GetMapping("/reset")
	public Users reset() {
		return userService.reset();
		
	}
	@GetMapping("/search")
	public Users search(@RequestParam String name) {
		if("".equals(name)) {
			return userService.reset();
		}
		Set<User> users= userService.reset().getUsers().stream().filter(u->u.getName().contains(name)).collect(Collectors.toSet());
		userService.getUser().setUsers(users);
		return userService.getUser();
		
	}
}
