package de.pddao.backend.service;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class WatchedPollenItemService {
    private final PollenItemRepository pollenItemRepository;

    @Autowired
    public WatchedPollenItemService(PollenItemRepository pollenItemRepository) {
        this.pollenItemRepository = pollenItemRepository;
    }

    public List<PollenItem> listWatchedPollenItems(String username) {
        return pollenItemRepository.findByWatchedBy(username);
    }

    public PollenItem updateAllergiesList(String pollenItemId, String username) {
        PollenItem pollenItemToUpdate = pollenItemRepository.findById(pollenItemId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No watched pollen items available"));

        if(pollenItemToUpdate.getWatchedBy().contains(username)){
            pollenItemToUpdate.getWatchedBy().remove(username);
        } else {
            pollenItemToUpdate.getWatchedBy().add(username);
        }
        return pollenItemRepository.save(pollenItemToUpdate);
    }
}

//.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No watched pollen items available");
