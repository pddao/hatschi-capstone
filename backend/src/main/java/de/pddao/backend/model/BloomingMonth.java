package de.pddao.backend.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;
import java.util.NoSuchElementException;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum BloomingMonth {
    JANUARY("January"),
    FEBRUARY("February"),
    MARCH("March"),
    APRIL("April"),
    MAY("May"),
    JUNE("June"),
    JULY("July"),
    AUGUST("August"),
    SEPTEMBER("September"),
    OCTOBER("October"),
    NOVEMBER("November"),
    DECEMBER("December");

    public final String nameOfMonth;

    BloomingMonth(String nameOfMonth) {
        this.nameOfMonth = nameOfMonth;
    }

    @JsonCreator
    public static BloomingMonth findValue(@JsonProperty("nameOfMonth") String nameOfMonth) {
        return Arrays.stream(BloomingMonth.values())
                .filter(element -> element.nameOfMonth.equals(nameOfMonth))
                .findFirst()
                .orElseThrow(NoSuchElementException::new);
    }
}

