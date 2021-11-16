package CrudPractice.CrudPractice.dto;

import lombok.Data;

@Data
public class SignInResponseDTO {
    private String email;
    private Boolean access;

    public SignInResponseDTO(String email, Boolean access) {
        this.email = email;
        this.access = access;
    }
}
