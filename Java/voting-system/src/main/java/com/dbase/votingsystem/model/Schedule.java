package com.dbase.votingsystem.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document
public class Schedule {
    @Id
    private String id;
    private String title;
    private String description;
}
