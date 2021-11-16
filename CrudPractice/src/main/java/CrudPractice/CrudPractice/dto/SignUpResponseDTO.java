package CrudPractice.CrudPractice.dto;

import lombok.Data;

@Data
public class SignUpResponseDTO {
    private String email;
    private Boolean access;

    public SignUpResponseDTO(String email, Boolean access) {
        this.email = email;
        this.access = access;
    }
}
