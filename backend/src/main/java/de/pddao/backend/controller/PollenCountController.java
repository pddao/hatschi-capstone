package de.pddao.backend.controller;

import de.pddao.backend.model.api.DwdApiResponse;
import de.pddao.backend.service.DwdApiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pollencount")
public class PollenCountController {

    private final DwdApiService dwdApiService;

    @Autowired
    public PollenCountController(DwdApiService dwdApiService) {
        this.dwdApiService = dwdApiService;
    }

    @GetMapping
    public List<DwdApiResponse> listPollenCount() {
        return dwdApiService.getPollenCount();
    }
}
