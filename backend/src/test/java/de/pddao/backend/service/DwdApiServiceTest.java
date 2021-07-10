package de.pddao.backend.service;

import de.pddao.backend.model.PollenItem;
import de.pddao.backend.model.api.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

class DwdApiServiceTest {

    private final RestTemplate mockedTemplate = mock(RestTemplate.class);
    private final DwdApiService dwdApiService = new DwdApiService(mockedTemplate);

    @Test
    @DisplayName("method should get pollen count from dwd pollen api")
    public void testGetPollenCount() {
        //Given
        DwdApiResponse[] dwdApiResponse = {
                DwdApiResponse.builder()
                        .last_update("test_last_update")
                        .next_update("test_next_update")
                        .name("test_name")
                        .sender("test_sender")
                        .legend(new DwdApiLegend("test_id1", "test_id2", "test_id3", "test_id4", "test_id5", "test_id6", "test_id7", "test_id1_desc", "test_id2_desc", "test_id3_desc", "test_id4_desc", "test_id5_desc", "test_id6_desc", "test_id7_desc"))
                        .content(DwdApiContent.builder()
                        .region_id(1)
                        .region_name("test_region_name")
                        .partregion_id(11)
                        .partregion_name("test_partregion_name")
                        .pollen(DwdApiPollen.builder()
                                .birch(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .rye(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .alder(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .ash(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .hazel(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .mugwort(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .grasses(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .ragweed(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .build())
                        .build()),
                DwdApiResponse.builder()
                        .last_update("test_last_update")
                        .next_update("test_next_update")
                        .name("test_name")
                        .sender("test_sender")
                        .legend(new DwdApiLegend("test_id1", "test_id2", "test_id3", "test_id4", "test_id5", "test_id6", "test_id7", "test_id1_desc", "test_id2_desc", "test_id3_desc", "test_id4_desc", "test_id5_desc", "test_id6_desc", "test_id7_desc"))
                        .content(DwdApiContent.builder()
                        .region_id(2)
                        .region_name("test_region_name")
                        .partregion_id(11)
                        .partregion_name("test_partregion_name")
                        .pollen(DwdApiPollen.builder()
                                .birch(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .rye(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .alder(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .ash(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .hazel(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .mugwort(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .grasses(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .ragweed(DwdApiPollenType.builder()
                                        .today("test_today")
                                        .tomorrow("test_tomorrow")
                                        .dayafter_to("test_dayafter_to")
                                        .build())
                                .build())
                        .build())
                .build()
        };


        //content(new DwdApiContent<>(1, "test_region_name", 12, "test_partregion_name", new DwdApiPollen(new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"))))
//        ("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to"), new DwdApiPollenType("test_today", "test_tomorrow", "test_dayafter_to")).build()))
//                        .build(),

        when(mockedTemplate.getForEntity(
                "https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json", DwdApiResponse[].class)).thenReturn(ResponseEntity.ok(dwdApiResponse));

        //When
        List<DwdApiResponse> listOfResponse = dwdApiService.getPollenCount();

        //Then
        assertThat(listOfResponse, containsInAnyOrder(dwdApiResponse));
        verify(mockedTemplate).getForEntity(
                "https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json", DwdApiResponse[].class);


    }


}