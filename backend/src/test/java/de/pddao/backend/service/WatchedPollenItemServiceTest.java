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
        when(pollenItemRepository.findById("hazel")).thenReturn(Optional.of(PollenItem.builder()
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

        when(pollenItemRepository.save(expected)).thenReturn(expected);

        //When
        PollenItem actual = watchedPollenItemService.updatePollenItem("Martin", "hazel", true);

        //Then
        assertThat(actual, is(expected));
        verify(pollenItemRepository).save(expected);
    }

    @Test
    @DisplayName("method should remove username from pollen item when isPollenItemWatched is false")
    public void testRemoveUsernameFromWatchedByAtPollenItem() {
        //Given
        when(pollenItemRepository.findById("hazel")).thenReturn(Optional.of(PollenItem.builder()
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

        when(pollenItemRepository.save(expected)).thenReturn(expected);

        //When
        PollenItem actual = watchedPollenItemService.updatePollenItem("Martin", "hazel", false);

        //Then
        assertThat(actual, is(expected));
        verify(pollenItemRepository).save(expected);
    }


    @Test
    @DisplayName("method should throw exception when pollen item is not found")
    public void testThrowExceptionWhenPollenItemIdIsNotFound() {
        // GIVEN
        when(pollenItemRepository.findById("olive")).thenReturn(Optional.empty());

        // WHEN
        assertThrows(ResponseStatusException.class, () -> watchedPollenItemService.updatePollenItem("Martin", "olive", false));
    }
}
