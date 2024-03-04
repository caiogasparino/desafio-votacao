import { Module } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AgendaController } from './agenda.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Agenda, AgendaSchema } from './schemas/agenda.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agenda.name, schema: AgendaSchema }]),
  ],
  providers: [AgendaService],
  controllers: [AgendaController],
})
export class AgendaModule {}
