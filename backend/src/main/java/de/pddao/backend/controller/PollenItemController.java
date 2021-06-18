package de.pddao.backend.controller;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.service.PollenItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/dictionary")
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


}
