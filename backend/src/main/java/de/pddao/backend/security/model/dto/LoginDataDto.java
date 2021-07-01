package de.pddao.backend.security.model.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDataDto {
    private String username;
    private String password;
}
