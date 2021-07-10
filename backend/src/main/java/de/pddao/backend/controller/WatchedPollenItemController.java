//package de.pddao.backend.controller;
//
//import de.pddao.backend.model.PollenItem;
//import de.pddao.backend.model.dto.WatchedPollenItemDto;
//import de.pddao.backend.service.WatchedPollenItemService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.security.Principal;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/pollenitems/watched")
//public class WatchedPollenItemController {
//    private final WatchedPollenItemService watchedPollenItemService;
//
//    @Autowired
//    public WatchedPollenItemController(WatchedPollenItemService watchedPollenItemService) {
//        this.watchedPollenItemService = watchedPollenItemService;
//    }
//
//    @GetMapping
//    public List<PollenItem> listPollenItemsOnWatchlist(Principal principal) {
//        return watchedPollenItemService.listWatchedPollenItems(principal.getName());
//    }
//
//    @PutMapping
//    public PollenItem updatePollenItemOnWatchlist(Principal principal, @RequestBody WatchedPollenItemDto pollenItemToWatch) {
//        return watchedPollenItemService.updatePollenItem(principal.getName(), pollenItemToWatch.getId(), pollenItemToWatch.isWatched());
//    }
//}
