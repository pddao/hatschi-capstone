package de.pddao.backend.service;

import de.pddao.backend.model.BloomingMonth;
import de.pddao.backend.model.PollenItem;
import de.pddao.backend.repository.PollenItemRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class WatchedPollenItemServiceTest {

    private final PollenItemRepository mockPollenItemRepository = mock(PollenItemRepository.class);
    private final WatchedPollenItemService watchedPollenItemService = new WatchedPollenItemService(mockPollenItemRepository);

    @Test
    @DisplayName("method should return pollen items watched by Susi")
    public void testListWatchedPollenItems() {
        //Given
        when(mockPollenItemRepository.findByWatchedBy(Optional.of("Susi"))).thenReturn(List.of(
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
        assertThat(listOfWatchedPollenItems, containsInAnyOrder(
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
                        .build(),
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
                        .build()
        ));
    }

    @Test
    @DisplayName("method should return all pollen items when watchedBy is empty")
    public void testListWatchedPollenItemsWhenWatchedByIsEmpty() {
        //Given
        when(mockPollenItemRepository.findAll()).thenReturn(List.of(
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
                        .build()
        ));

        //When
        List<PollenItem> listAllPollenItems = watchedPollenItemService.listWatchedPollenItems(Optional.empty());

        //Then
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
                        .build()
        ));
    }

    @Test
    @DisplayName("method should add username Martin to pollen item when isPollenItemWatched is true and watchedBy does not contain username yet")
    public void testAddUsernameToWatchedByAtPollenItem() {
        //Given
        when(mockPollenItemRepository.findById("hazel")).thenReturn(Optional.of(
                PollenItem.builder()
                        .englishName("hazel")
                        .latinName("test_latinName")
                        .beginBloomingSeason(BloomingMonth.AUGUST)
                        .endBloomingSeason(BloomingMonth.SEPTEMBER)
                        .description("test_description")
                        .firstPicUrl("test_urlFirstPic")
                        .secondPicUrl("test_urlSecondPic")
                        .thirdPicUrl("test_urlThirdPic")
                        .germanName("test_germanName")
                        .watchedBy(new ArrayList<>(List.of("Anna", "Susi", "Hans")))
                        .build()));

        PollenItem expected = PollenItem.builder()
                .englishName("hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Anna", "Susi", "Hans", "Martin"))
                .build();

        when(mockPollenItemRepository.save(expected)).thenReturn(expected);

        //When
        PollenItem actual = watchedPollenItemService.updatePollenItem("Martin", "hazel", true);

        //Then
        assertThat(actual, is(expected));
        verify(mockPollenItemRepository).save(expected);
    }

    @Test
    @DisplayName("method should remove username from pollen item when isPollenItemWatched is false")
    public void testRemoveUsernameFromWatchedByAtPollenItem() {
        //Given
        when(mockPollenItemRepository.findById("hazel")).thenReturn(Optional.of(PollenItem.builder()
                .englishName("hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(new ArrayList<>(List.of("Anna", "Susi", "Hans", "Martin")))
                .build()));

        PollenItem expected = PollenItem.builder()
                .englishName("hazel")
                .latinName("test_latinName")
                .beginBloomingSeason(BloomingMonth.AUGUST)
                .endBloomingSeason(BloomingMonth.SEPTEMBER)
                .description("test_description")
                .firstPicUrl("test_urlFirstPic")
                .secondPicUrl("test_urlSecondPic")
                .thirdPicUrl("test_urlThirdPic")
                .germanName("test_germanName")
                .watchedBy(List.of("Anna", "Susi", "Hans"))
                .build();

        when(mockPollenItemRepository.save(expected)).thenReturn(expected);

        //When
        PollenItem actual = watchedPollenItemService.updatePollenItem("Martin", "hazel", false);

        //Then
        assertThat(actual, is(expected));
        verify(mockPollenItemRepository).save(expected);
    }


    @Test
    @DisplayName("method should throw exception when pollen item is not found")
    public void testThrowExceptionWhenPollenItemIdIsNotFound() {
        // GIVEN
        when(mockPollenItemRepository.findById("olive")).thenReturn(Optional.empty());

        // WHEN
        assertThrows(ResponseStatusException.class, () -> watchedPollenItemService.updatePollenItem("Martin", "olive", false));
    }
}
