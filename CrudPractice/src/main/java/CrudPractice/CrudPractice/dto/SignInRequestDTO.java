package CrudPractice.CrudPractice.dto;

import lombok.Data;

@Data
public class SignInRequestDTO {
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    private String email;
    private String password;
}
