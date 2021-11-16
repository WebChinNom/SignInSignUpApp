package CrudPractice.CrudPractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class CrudPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudPracticeApplication.class, args);
	}

}
