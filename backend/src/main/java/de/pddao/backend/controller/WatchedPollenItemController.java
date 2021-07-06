package de.pddao.backend.controller;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.security.model.dto.PollenItemDto;
import de.pddao.backend.service.WatchedPollenItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/pollenitem/watched")
public class WatchedPollenItemController {
    private final WatchedPollenItemService watchedPollenItemService;

    @Autowired
    public WatchedPollenItemController(WatchedPollenItemService watchedPollenItemService) {
        this.watchedPollenItemService = watchedPollenItemService;
    }

    @GetMapping
    public List<PollenItem> listWatchedPollenItems(Principal principal) {
        return watchedPollenItemService.listWatchedPollenItems(principal.getName());
    }

    @PutMapping
    public PollenItem updateAllergiesList (@RequestBody PollenItemDto pollenItemDto, Principal principal) {
        return watchedPollenItemService.updateAllergiesList(pollenItemDto.getId(), principal.getName());
    }
}
