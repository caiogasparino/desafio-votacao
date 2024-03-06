package com.dbase.votingsystem.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document
public class VotingSession {
    @Id
    private String id;

    private String scheduleId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
