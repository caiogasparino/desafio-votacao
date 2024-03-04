import { Module } from '@nestjs/common';
import { VotingSessionService } from './voting-session.service';
import { VotingSessionController } from './voting-session.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VotingSession,
  VotingSessionSchema,
} from './schemas/voting-session.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VotingSession.name, schema: VotingSessionSchema },
    ]),
  ],
  providers: [VotingSessionService],
  controllers: [VotingSessionController],
})
export class VotingSessionModule {}
