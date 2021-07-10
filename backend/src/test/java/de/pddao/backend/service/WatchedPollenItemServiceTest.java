package de.pddao.backend.service;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class WatchedPollenItemServiceTest {

    private final PollenItemRepository pollenItemRepository = mock(PollenItemRepository.class);
    private final WatchedPollenItemService watchedPollenItemService = new WatchedPollenItemService(pollenItemRepository);

    @Test
    @DisplayName("method should return pollen items watched by Susi")
    public void testListWatchedPollenItems() {
        //Given
        when(pollenItemRepository.findByWatchedBy(Optional.of("Susi"))).thenReturn(List.of(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Susi", "Frank"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Susi", "Anna"))
                        .build()
        ));

        //When
        List<PollenItem> listOfWatchedPollenItems = watchedPollenItemService.listWatchedPollenItems(Optional.of("Susi"));

        //Then
        verify(pollenItemRepository).findByWatchedBy(Optional.of("Susi"));
        assertThat(listOfWatchedPollenItems, containsInAnyOrder(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Susi", "Frank"))
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of("Susi", "Anna"))
                        .build()
        ));
    }

    @Test
    @DisplayName("method should return all pollen items when watchedBy is empty")
    public void testListAllPollenItemsWhenWatchedByIsEmpty() {
        //Given
        when(pollenItemRepository.findAll()).thenReturn(List.of(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build(),
                PollenItem.builder()
                        .englishName("test_grasses")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build()
                )
        );

        //When
        List<PollenItem> listAllPollenItems = watchedPollenItemService.listWatchedPollenItems(Optional.empty());

        //Then
        verify(pollenItemRepository).findAll();
        assertThat(listAllPollenItems, containsInAnyOrder(
                PollenItem.builder()
                        .englishName("test_hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build(),
                PollenItem.builder()
                        .englishName("test_ragweed")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build(),
                PollenItem.builder()
                        .englishName("test_grasses")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(List.of())
                        .build()
        ));
    }

    @Test
    @DisplayName("method should add username to pollen item when isPollenItemWatched is true and watchedBy does not contain username")
    public void testAddUsernameToWatchedByAtPollenItem() {
        //Given
        when(watchedPollenItemService.updatePollenItem("test_username", "test_id", true)).thenReturn();

        //When
        PollenItem pollenItemToUpdate = watchedPollenItemService.updatePollenItem("test_username", "test_id", true);

        //Then
        verify(pollenItemRepository).save(pollenItemToUpdate);
    }

    @Test
    @DisplayName("method should remove username from pollen item when isPollenItemWatched is false")
    public void testRemoveUsernameFromWatchedByAtPollenItem() {
        //Given
        when(watchedPollenItemService.updatePollenItem("test_username", "test_id", false)).thenReturn();

        //When
        PollenItem pollenItemToUpdate = watchedPollenItemService.updatePollenItem("test_username", "test_id", false);

        //Then
        verify(pollenItemRepository).save(pollenItemToUpdate);

    }

//    @Test
//    @DisplayName("method should throw exception when pollen item is not found")
//    public void addPullToWatchlistShouldThrowWhenPullRequestNotfound() {
//        // GIVEN
//
//        when(watchedPollenItemService.updatePollenItem("test_username", "test_id", false)).thenReturn(Optional.isEmpty());
//
//        // WHEN
//        assertThrows(ResponseStatusException.class, () -> pollenItemRepository.findById("test_id"));
//    }
}
