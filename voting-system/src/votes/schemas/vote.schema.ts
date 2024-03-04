import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote {
  @Prop({ required: true })
  agendaId: string;

  @Prop({ required: true })
  memberId: string;

  @Prop({ required: true })
  vote: boolean;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
