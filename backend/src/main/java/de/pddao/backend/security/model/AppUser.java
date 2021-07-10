package de.pddao.backend.security.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "appusers")
@Builder
public class AppUser {

    @Id
    private String username;
    private String password;
}
