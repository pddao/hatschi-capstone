package de.pddao.backend.security.service;

import de.pddao.backend.security.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserRepository appUserRepository;

    @Autowired
    public AppUserDetailsService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return appUserRepository.findById(username).map(appUser -> User
                .withUsername(username)
                .password(appUser.getPassword())
                .authorities("user")
                .build())
                .orElseThrow(() -> new UsernameNotFoundException("Username " + username + "does not exist!"));
    }
}
