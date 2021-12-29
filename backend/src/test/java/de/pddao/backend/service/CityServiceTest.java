package de.pddao.backend.service;

import de.pddao.backend.model.City;
import de.pddao.backend.repository.CityRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class CityServiceTest {

    private final CityRepository cityRepository = mock(CityRepository.class);
    private final CityService cityService = new CityService(cityRepository);

    @Test
    @DisplayName("method should return all cities in repository")
    public void testListAllCities() {
        //Given
        when(cityRepository.findAll()).thenReturn(List.of(
                City.builder()
                        .name("test_name")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build(),
                City.builder()
                        .name("test_name2")
                        .region_id(4)
                        .region_name("test_region_name2")
                        .partregion_id(41)
                        .partregion_name("test_partregion_name2")
                        .response_position(2)
                        .build()
        ));

        //When
        List<City> listOfAllCities = cityService.listAllCities();

        //Then
        assertThat(listOfAllCities, containsInAnyOrder(
                City.builder()
                        .name("test_name2")
                        .region_id(4)
                        .region_name("test_region_name2")
                        .partregion_id(41)
                        .partregion_name("test_partregion_name2")
                        .response_position(2)
                        .build(),
                City.builder()
                        .name("test_name")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build()
                )
        );
    }

    @Test
    @DisplayName("method should return city by name")
    public void testGetCityByName() {
        //Given
        when(cityRepository.findByName("Hamburg")).thenReturn(Optional.of(
                City.builder()
                        .name("Hamburg")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build()
        ));

        //When
        Optional<City> optionalCity = cityService.getCityByName("Hamburg");

        //Then
        assertThat(optionalCity, is(Optional.of(
                City.builder()
                        .name("Hamburg")
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(22)
                        .partregion_name("test_partregion_name")
                        .response_position(6)
                        .build()
                )
        ));

    }
}