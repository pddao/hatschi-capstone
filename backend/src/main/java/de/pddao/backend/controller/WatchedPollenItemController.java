package de.pddao.backend.controller;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.model.dto.PollenItemDto;
import de.pddao.backend.service.WatchedPollenItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pollenitems/watched")
public class WatchedPollenItemController {
    private final WatchedPollenItemService watchedPollenItemService;

    @Autowired
    public WatchedPollenItemController(WatchedPollenItemService watchedPollenItemService) {
        this.watchedPollenItemService = watchedPollenItemService;
    }

    @GetMapping
    public List<PollenItem> listPollenItemsOnWatchlist (@RequestParam Optional<String> watchedBy) {
        return watchedPollenItemService.listWatchedPollenItems(watchedBy);
    }

    @PutMapping
    public PollenItem updatePollenItemOnWatchlist (@RequestBody PollenItemDto pollenItemToWatch, Principal principal) {
        String username = principal.getName();
        if(pollenItemToWatch.getUsername().equals(username)) {
            return watchedPollenItemService.updatePollenItem(pollenItemToWatch.getId(), pollenItemToWatch.getUsername());
        } else {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
    }
}
