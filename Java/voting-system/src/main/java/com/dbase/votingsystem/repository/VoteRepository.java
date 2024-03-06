package com.dbase.votingsystem.repository;

import com.dbase.votingsystem.model.Vote;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;


public interface VoteRepository extends MongoRepository<Vote, String> {
    List<Vote> findByScheduleId(String scheduleId);
}