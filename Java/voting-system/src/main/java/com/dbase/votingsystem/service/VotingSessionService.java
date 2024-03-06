package com.dbase.votingsystem.service;

import com.dbase.votingsystem.model.VotingSession;
import com.dbase.votingsystem.repository.VotingSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VotingSessionService {

    private final VotingSessionRepository votingSessionRepository;

    @Autowired
    public VotingSessionService(VotingSessionRepository votingSessionRepository) {
        this.votingSessionRepository = votingSessionRepository;
    }

    public VotingSession save(VotingSession votingSession) {
        return votingSessionRepository.save(votingSession);
    }

    public List<VotingSession> findAll() {
        return votingSessionRepository.findAll();
    }
}
