import { Module } from '@nestjs/common';
import { AgendaModule } from './agenda/agenda.module';
import { VotesModule } from './votes/votes.module';
import { VotingSessionModule } from './voting-session/voting-session.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:5017/', {
      authSource: 'admin',
      dbName: 'voting-system',
    }),
    AgendaModule,
    VotesModule,
    VotingSessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
