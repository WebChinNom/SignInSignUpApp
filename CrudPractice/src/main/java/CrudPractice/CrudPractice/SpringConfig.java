package CrudPractice.CrudPractice;

import CrudPractice.CrudPractice.repository.MemberRepository;
import CrudPractice.CrudPractice.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class SpringConfig {
    private final DataSource dataSource;
    private final EntityManager entityManager;

    public SpringConfig(DataSource dataSource, EntityManager entityManager) {
        this.dataSource = dataSource;
        this.entityManager = entityManager;
    }
    
    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    public MemberRepository memberRepository(){
        return new MemberRepository(entityManager);
    }

}
