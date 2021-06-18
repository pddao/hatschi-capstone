package de.pddao.backend.service;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollenItemService {

    private final PollenItemRepository pollenItemRepository;

    @Autowired
    public PollenItemService(PollenItemRepository pollenItemRepository) {
        this.pollenItemRepository = pollenItemRepository;
    }

    public List<PollenItem> listAllPollenItems(){

        return pollenItemRepository.findAll();
    }

    public Optional<PollenItem> getPollenItemById(String id) {
        return pollenItemRepository.findById(id);
    }
}
