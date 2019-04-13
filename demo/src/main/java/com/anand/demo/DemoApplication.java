package com.anand.demo;

import static springfox.documentation.builders.PathSelectors.any;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@SpringBootApplication
@EnableSwagger2
public class DemoApplication {
	 
	 @Bean
	    public Docket api(){
	        return new Docket(DocumentationType.SWAGGER_2).groupName("Anand").select()
	                .apis(RequestHandlerSelectors.basePackage("com.anand.demo"))
	                .paths(any()).build().apiInfo(new ApiInfo("User Services",
	                        "A set of services to provide data access to User", "1.0.0", null,
	                        new Contact("Anand kumar", "aktiwari@nextgen.com", null),null, null));
	    }
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
