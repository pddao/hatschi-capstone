package de.pddao.backend.repository;

import de.pddao.backend.model.PollenItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PollenItemRepository extends PagingAndSortingRepository <PollenItem, String> {

    List<PollenItem> findAll();

    Optional<PollenItem> findById(String id);

    List<PollenItem> findByWatchedBy(String username);

}
