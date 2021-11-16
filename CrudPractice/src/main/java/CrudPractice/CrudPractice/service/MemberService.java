package CrudPractice.CrudPractice.service;

import CrudPractice.CrudPractice.domain.Member;
import CrudPractice.CrudPractice.repository.MemberRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Optional<Member> findOne(String email){
        Optional<Member> byEmail = memberRepository.findByEmail(email);
        return byEmail;
    }
    public String join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getEmail();
    }
    public void validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail()).ifPresent(m -> {
            throw new IllegalStateException("이 이메일로 가입된 회원이 존재합니다.");
        });
    }

    public List<Member> findAllMember() {
        return memberRepository.findAll();
    }
}
