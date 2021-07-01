package de.pddao.backend.repository;

import de.pddao.backend.model.City;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepository extends PagingAndSortingRepository<City, String> {

    List<City> findAll();

    Optional<City> findByName(String name);
}
