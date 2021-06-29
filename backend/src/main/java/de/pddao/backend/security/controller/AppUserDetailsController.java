package de.pddao.backend.security.controller;

import de.pddao.backend.security.model.dto.AppUserDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/user/")
public class AppUserDetailsController {

    @GetMapping("me")
    public AppUserDto getLoggedInUser (Principal principal) {
        String username = principal.getName();

        return new AppUserDto(username);
    }

}
