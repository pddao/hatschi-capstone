package de.pddao.backend.service;

import de.pddao.backend.model.api.DwdApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class DwdApiService {
    private final String dwdApi = "https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json";
    private final RestTemplate restTemplate;

    @Autowired
    public DwdApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<DwdApiResponse> getPollenCount() {
        ResponseEntity<DwdApiResponse> response = restTemplate.getForEntity(dwdApi, DwdApiResponse.class);

        if (response.getBody() != null) {
            System.out.println(response.getBody());
            return Arrays.asList(response.getBody());
        }
        return List.of();
    }

}