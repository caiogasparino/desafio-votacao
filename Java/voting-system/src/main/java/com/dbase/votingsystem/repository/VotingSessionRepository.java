package com.dbase.votingsystem.repository;

import com.dbase.votingsystem.model.VotingSession;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VotingSessionRepository extends MongoRepository<VotingSession, Long> {
}
