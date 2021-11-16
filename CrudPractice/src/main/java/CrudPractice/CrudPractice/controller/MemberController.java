package CrudPractice.CrudPractice.controller;

import CrudPractice.CrudPractice.domain.Member;
import CrudPractice.CrudPractice.dto.SignInRequestDTO;
import CrudPractice.CrudPractice.dto.SignInResponseDTO;
import CrudPractice.CrudPractice.dto.SignUpRequestDTO;
import CrudPractice.CrudPractice.dto.SignUpResponseDTO;
import CrudPractice.CrudPractice.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/sign-up")
    public SignUpResponseDTO signUp(@RequestBody SignUpRequestDTO signUpRequestDTO) {
        // 해당 이메일의 회원이 없을 경우
        Optional<Member> foundMember = memberService.findOne(signUpRequestDTO.getEmail());
        if (foundMember == null) {
            return new SignUpResponseDTO(signUpRequestDTO.getEmail(), false);
        } else {
            return new SignUpResponseDTO(signUpRequestDTO.getEmail(), true);
        }
    }

    @PostMapping("/sing-in")
    public SignInResponseDTO signIn(@RequestBody SignInRequestDTO signInRequestDTO) {
        Optional<Member> foundMember = memberService.findOne(signInRequestDTO.getEmail());

        if (foundMember == null) {
            return new SignInResponseDTO(signInRequestDTO.getEmail(), false);
        } else if (foundMember.get().getPassword() != signInRequestDTO.getPassword()) {
            return new SignInResponseDTO(signInRequestDTO.getEmail(), false);
        } else {
            return new SignInResponseDTO(signInRequestDTO.getEmail(), true);
        }
    }

}