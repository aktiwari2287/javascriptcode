package com.anand.demo;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;
@Service
public class UserService {
	private Users user;
	private Set<User> users=new HashSet();
	public UserService() {
		user=new Users();
		this.users.add(new User("Pooja","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/80.jpg"));
		this.users.add(new User("Dev","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/58.jpg"));
		this.users.add(new User("Ram","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/18.jpg"));
		this.users.add(new User("Rohan","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/48.jpg"));
		this.users.add(new User("Sohan","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/88.jpg"));
		this.user.setUsers(users);
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public void addUser(User user2) {
		user.getUsers().add(user2);
	}
	public Users reset() {
		this.users.add(new User("Pooja","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/80.jpg"));
		this.users.add(new User("Dev","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/58.jpg"));
		this.users.add(new User("Ram","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/18.jpg"));
		this.users.add(new User("Rohan","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/48.jpg"));
		this.users.add(new User("Sohan","Ranchi","anand@gmail.com","22","https://randomuser.me/api/portraits/men/88.jpg"));
		this.user.setUsers(users);
		return user;
	}

}
