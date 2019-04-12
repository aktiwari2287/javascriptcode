package com.anand.demo;

import org.springframework.stereotype.Component;

@Component
public class Singleton {
	public static String sendMessage() {
		return "Hey Anand";
	}

}
