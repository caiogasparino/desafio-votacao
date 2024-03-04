import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  VotingSession,
  VotingSessionDocument,
} from './schemas/voting-session.schema';
import { CreateVotingSessionDto } from './dto/create-voting-session.dto';

@Injectable()
export class VotingSessionService {
  constructor(
    @InjectModel(VotingSession.name)
    private votingSessionModel: Model<VotingSessionDocument>,
  ) {}

  async open(
    createVotingSessionDto: CreateVotingSessionDto,
  ): Promise<VotingSession> {
    const startTime = createVotingSessionDto.startTime || new Date();
    let endTime = createVotingSessionDto.endTime;

    if (createVotingSessionDto.durationInMinutes) {
      endTime = new Date(
        startTime.getTime() + createVotingSessionDto.durationInMinutes * 60000,
      );
    } else if (!endTime) {
      endTime = new Date(startTime.getTime() + 60000);
    }

    const votingSession = new this.votingSessionModel({
      ...createVotingSessionDto,
      startTime,
      endTime,
    });

    return votingSession.save();
  }
}
