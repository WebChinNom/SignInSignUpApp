package CrudPractice.CrudPractice.dto;

import lombok.Data;

@Data
public class SignUpRequestDTO {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
