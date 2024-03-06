package com.dbase.votingsystem.controller;

import com.dbase.votingsystem.model.Vote;
import com.dbase.votingsystem.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/votes")
public class VoteController {

    private final VoteService voteService;

    @Autowired
    public VoteController(VoteService voteService) {
        this.voteService = voteService;
    }

    @PostMapping
    public ResponseEntity<Vote> castVote(@RequestBody Vote vote) {
        Vote savedVote = voteService.save(vote);
        return ResponseEntity.ok(savedVote);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVote(@PathVariable String id) {
        Optional<Vote> vote = voteService.findById(id);
        return vote.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/result/{scheduleId}")
    public ResponseEntity<?> getVotingResults(@PathVariable String scheduleId) {
        try {
            List<Vote> votes = voteService.findByScheduleId(scheduleId);
            long yesVotes = votes.stream().filter(Vote::isVote).count();
            long noVotes = votes.size() - yesVotes;

            return ResponseEntity.ok(new VotingResult(yesVotes, noVotes));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting voting results: " + e.getMessage());
        }
    }

    private static class VotingResult {
        public long yesVotes;
        public long noVotes;

        public VotingResult(long yesVotes, long noVotes) {
            this.yesVotes = yesVotes;
            this.noVotes = noVotes;
        }
    }
}
