package de.pddao.backend.service;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class WatchedPollenItemService {
    private final PollenItemRepository pollenItemRepository;

    @Autowired
    public WatchedPollenItemService(PollenItemRepository pollenItemRepository) {
        this.pollenItemRepository = pollenItemRepository;
    }

    public List<PollenItem> listWatchedPollenItems(Optional<String> watchedBy) {
        if (watchedBy.isEmpty()) {
            return List.of();
        }
        return pollenItemRepository.findByWatchedBy(watchedBy);
    }

    public PollenItem updatePollenItem(String username, String pollenItemId, boolean isPollenItemWatched) {
        PollenItem pollenItemToWatch = pollenItemRepository.findById(pollenItemId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pollen item not found"));

        if (isPollenItemWatched) {
            if (!pollenItemToWatch.getWatchedBy().contains(username)) {
                pollenItemToWatch.getWatchedBy().add(username);
            }
        } else {
            pollenItemToWatch.getWatchedBy().remove(username);
        }
        return pollenItemRepository.save(pollenItemToWatch);
    }
}
