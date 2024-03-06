package com.dbase.votingsystem.controller;

import com.dbase.votingsystem.model.VotingSession;
import com.dbase.votingsystem.service.VotingSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voting-sessions")
public class VotingSessionController {

    private final VotingSessionService votingSessionService;

    @Autowired
    public VotingSessionController(VotingSessionService votingSessionService) {
        this.votingSessionService = votingSessionService;
    }

    @PostMapping
    public ResponseEntity<VotingSession> createVotingSession(@RequestBody VotingSession votingSession) {
        VotingSession savedSession = votingSessionService.save(votingSession);
        return new ResponseEntity<>(savedSession, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<VotingSession>> getAllVotingSessions() {
        List<VotingSession> sessions = votingSessionService.findAll();
        if (sessions.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(sessions);
    }
}
