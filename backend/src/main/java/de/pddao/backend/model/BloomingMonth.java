package de.pddao.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape=JsonFormat.Shape.OBJECT)
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


//    @JsonCreator
//    public static CounselingSetting findValue(@JsonProperty("displayName") String displayName) {
//        return Arrays.stream(CounselingSetting.values()).filter(setting -> setting.displayName.equals(displayName)).findFirst().get();
//    }

}

