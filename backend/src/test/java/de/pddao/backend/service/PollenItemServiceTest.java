package de.pddao.backend.service;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PollenItemServiceTest {

    private final PollenItemRepository mockPollenItemRepository = mock(PollenItemRepository.class);
    private final PollenItemService pollenItemService = new PollenItemService(mockPollenItemRepository);

    @Test
    @DisplayName("method should return all pollen items in repository")
    public void testListAllPollenItems() {
        //Given
        when(mockPollenItemRepository.findAll()).thenReturn(List.of(PollenItem.builder()
                                .englishName("test_englishName")
                                .latinName("test_latinName")
                                .beginBloomingSeason(BloomingMonth.AUGUST)
                                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                                .description("test_description")
                                .firstPicUrl("test_urlFirstPic")
                                .secondPicUrl("test_urlSecondPic")
                                .thirdPicUrl("test_urlThirdPic")
                                .germanName("test_germanName")
                                .watchedBy(List.of("test_user1", "test_user2"))
                                .build(),
                        PollenItem.builder()
                                .englishName("test_englishName2")
                                .latinName("test_latinName2")
                                .beginBloomingSeason(BloomingMonth.JULY)
                                .endBloomingSeason(BloomingMonth.AUGUST)
                                .description("test_description2")
                                .firstPicUrl("test_urlFirstPic2")
                                .secondPicUrl("test_urlSecondPic2")
                                .thirdPicUrl("test_urlThirdPic2")
                                .germanName("test_germanName2")
                                .watchedBy(List.of("test_user3", "test_user4"))
                                .build()
                )
        );

        //When
        List<PollenItem> pollenItems = pollenItemService.listAllPollenItems();

        //Then
        assertThat(pollenItems, containsInAnyOrder(
                        PollenItem.builder()
                                .englishName("test_englishName2")
                                .latinName("test_latinName2")
                                .beginBloomingSeason(BloomingMonth.JULY)
                                .endBloomingSeason(BloomingMonth.AUGUST)
                                .description("test_description2")
                                .firstPicUrl("test_urlFirstPic2")
                                .secondPicUrl("test_urlSecondPic2")
                                .thirdPicUrl("test_urlThirdPic2")
                                .germanName("test_germanName2")
                                .watchedBy(List.of("test_user3", "test_user4"))
                                .build(),
                        PollenItem.builder()
                                .englishName("test_englishName")
                                .latinName("test_latinName")
                                .beginBloomingSeason(BloomingMonth.AUGUST)
                                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                                .description("test_description")
                                .firstPicUrl("test_urlFirstPic")
                                .secondPicUrl("test_urlSecondPic")
                                .thirdPicUrl("test_urlThirdPic")
                                .germanName("test_germanName")
                                .watchedBy(List.of("test_user1", "test_user2"))
                                .build()
                )
        );
    }

    @Test
    @DisplayName("method should return pollen item by id")
    public void testGetPollenItemById() {
        //Given
        when(mockPollenItemRepository.findById("test_id")).thenReturn(Optional.of(
                        PollenItem.builder()
                                .englishName("test_englishName")
                                .latinName("test_latinName")
                                .beginBloomingSeason(BloomingMonth.AUGUST)
                                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                                .description("test_description")
                                .firstPicUrl("test_urlFirstPic")
                                .secondPicUrl("test_urlSecondPic")
                                .thirdPicUrl("test_urlThirdPic")
                                .germanName("test_germanName")
                                .watchedBy(List.of("test_user1", "test_user2"))
                                .build()
                )
        );

        //When
        Optional<PollenItem> optionalPollenItem = pollenItemService.getPollenItemById("test_id");

        //Then
        assertThat(optionalPollenItem, is(Optional.of(
                        PollenItem.builder()
                                .englishName("test_englishName")
                                .latinName("test_latinName")
                                .beginBloomingSeason(BloomingMonth.AUGUST)
                                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                                .description("test_description")
                                .firstPicUrl("test_urlFirstPic")
                                .secondPicUrl("test_urlSecondPic")
                                .thirdPicUrl("test_urlThirdPic")
                                .germanName("test_germanName")
                                .watchedBy(List.of("test_user1", "test_user2"))
                                .build()
                )
        ));
    }

    @Test
    @DisplayName("method should return a list of all pollen items watched by some user")
    public void testGetAllPollenItemsWatchedBy() {
        //Given
        when(mockPollenItemRepository.findByWatchedBy(Optional.of("Hans"))).thenReturn(List.of(
                PollenItem.builder()
                        .englishName("test_englishName4")
                        .latinName("test_latinName4")
                        .beginBloomingSeason(BloomingMonth.JANUARY)
                        .endBloomingSeason(BloomingMonth.AUGUST)
                        .description("test_description4")
                        .firstPicUrl("test_urlFirstPic4")
                        .secondPicUrl("test_urlSecondPic4")
                        .thirdPicUrl("test_urlThirdPic4")
                        .germanName("test_germanName4")
                        .watchedBy(List.of("Hans", "test_user4"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_englishName2")
                        .latinName("test_latinName2")
                        .beginBloomingSeason(BloomingMonth.JULY)
                        .endBloomingSeason(BloomingMonth.AUGUST)
                        .description("test_description2")
                        .firstPicUrl("test_urlFirstPic2")
                        .secondPicUrl("test_urlSecondPic2")
                        .thirdPicUrl("test_urlThirdPic2")
                        .germanName("test_germanName2")
                        .watchedBy(List.of("test_user3", "Hans"))
                        .build()
        ));

        //When
        List<PollenItem> pollenItemsWatchedByHans = pollenItemService.getAllPollenItemsWatchedBy(Optional.of("Hans"));

        //Then
        assertThat(pollenItemsWatchedByHans, containsInAnyOrder(
                PollenItem.builder()
                        .englishName("test_englishName4")
                        .latinName("test_latinName4")
                        .beginBloomingSeason(BloomingMonth.JANUARY)
                        .endBloomingSeason(BloomingMonth.AUGUST)
                        .description("test_description4")
                        .firstPicUrl("test_urlFirstPic4")
                        .secondPicUrl("test_urlSecondPic4")
                        .thirdPicUrl("test_urlThirdPic4")
                        .germanName("test_germanName4")
                        .watchedBy(List.of("Hans", "test_user4"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_englishName2")
                        .latinName("test_latinName2")
                        .beginBloomingSeason(BloomingMonth.JULY)
                        .endBloomingSeason(BloomingMonth.AUGUST)
                        .description("test_description2")
                        .firstPicUrl("test_urlFirstPic2")
                        .secondPicUrl("test_urlSecondPic2")
                        .thirdPicUrl("test_urlThirdPic2")
                        .germanName("test_germanName2")
                        .watchedBy(List.of("test_user3", "Hans"))
                        .build()
        ));
    }
}