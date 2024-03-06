package com.dbase.votingsystem.repository;

import com.dbase.votingsystem.model.Schedule;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, String> {
}
