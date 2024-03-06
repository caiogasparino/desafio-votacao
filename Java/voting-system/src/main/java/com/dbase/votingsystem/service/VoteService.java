
package com.dbase.votingsystem.service;

import com.dbase.votingsystem.model.Vote;
import com.dbase.votingsystem.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoteService {

    private final VoteRepository voteRepository;

    @Autowired
    public VoteService(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    public Vote save(Vote vote) {
        return voteRepository.save(vote);
    }

    public List<Vote> findByScheduleId(String scheduleId) {
        return voteRepository.findByScheduleId(scheduleId);
    }

    public Optional<Vote> findById(String id) {
        return voteRepository.findById(id);
    }
}
