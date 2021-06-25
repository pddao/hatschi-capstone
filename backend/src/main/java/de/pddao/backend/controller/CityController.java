package de.pddao.backend.controller;

import de.pddao.backend.model.City;
import de.pddao.backend.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cities")
public class CityController {

    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public List<City> listAllCities() {
        return cityService.listAllCities();
    }

    @GetMapping("/{name}")
    public City getCityByName(@PathVariable String name) {
        Optional<City> optionalCity = cityService.getCityByName(name);

        if (optionalCity.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "city doesn't exist");
        }
        return optionalCity.get();
    }
}
