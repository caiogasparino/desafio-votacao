import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VotingSessionDocument = VotingSession & Document;

@Schema()
export class VotingSession {
  @Prop({ required: true })
  agendaId: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ default: false })
  isOpen: boolean;
}

export const VotingSessionSchema = SchemaFactory.createForClass(VotingSession);
