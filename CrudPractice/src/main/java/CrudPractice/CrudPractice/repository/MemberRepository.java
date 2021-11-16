package CrudPractice.CrudPractice.repository;

import CrudPractice.CrudPractice.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class MemberRepository {
    private final EntityManager em;

    public MemberRepository(EntityManager em){
        this.em = em;
    }


//회원 객체를 받아 DB에 저장하는 메소드
    public Member save(Member member){
        em.persist(member);
        return member;
    }
    public Optional<Member> findById(Long id){
        Member member = em.find(Member.class, id);
        return Optional.ofNullable(member);
    }

    public Optional<Member> findByEmail(String email) {
        Member member = em.find(Member.class, email);
        return Optional.ofNullable(member);
    }

    public List<Member> findAll(){
        return em.createQuery("select m from Member m", Member.class).getResultList();
    }
}
