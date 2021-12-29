package de.pddao.backend.security.service;

import de.pddao.backend.security.model.AppUser;
import de.pddao.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AppUserDetailsServiceTest {
    private final AppUserRepository appUserRepository = mock(AppUserRepository.class);
    private final AppUserDetailsService appUserDetailsService = new AppUserDetailsService(appUserRepository);

    @Test
    public void findUserByName() {
        //Given
        when(appUserRepository.findById("Jochen")).thenReturn(
                Optional.of(
                        AppUser.builder()
                                .username("Jochen")
                                .password("jochen_password")
                                .build()));

        //When
        UserDetails actual = appUserDetailsService.loadUserByUsername("Jochen");

        //Then
        assertThat(actual.getUsername(), is("Jochen"));
        assertThat(actual.getPassword(), is("jochen_password"));
    }

    @Test
    public void throwsWhenUsernameIsNotFound() {
        //Given
        when(appUserRepository.findById("Jochen")).thenReturn(Optional.empty());

        //When
        Executable when = () -> appUserDetailsService.loadUserByUsername("Jochen");

        //Then
        assertThrows(UsernameNotFoundException.class, when);
    }


}