package de.pddao.backend.controller;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.service.PollenItemService;
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
@RequestMapping("/api/dictionary")
public class PollenItemController {

    private final PollenItemService pollenItemService;

    @Autowired
    public PollenItemController(PollenItemService pollenItemService) {
        this.pollenItemService = pollenItemService;
    }

    @GetMapping
    public List<PollenItem> listAllPollenItems() {
        return pollenItemService.listAllPollenItems();
    }

    @GetMapping("/{id}")
    public PollenItem getPollenItemById(@PathVariable String id) {
        Optional<PollenItem> optionalPollenItem = pollenItemService.getPollenItemById(id);

        if (optionalPollenItem.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "id doesn't exist");
        }
        return optionalPollenItem.get();
    }
}
