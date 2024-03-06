package com.dbase.votingsystem.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document
@Data
public class Vote {
    @Id
    private String id;

    private String scheduleId;
    private String memberId;
    private boolean vote;
}
