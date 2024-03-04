import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote, VoteDocument } from './schemas/vote.schema';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VotesService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>) {}

  async create(createVoteDto: CreateVoteDto): Promise<Vote> {
    const existingVote = await this.voteModel
      .findOne({
        agendaId: createVoteDto.agendaId,
        memberId: createVoteDto.memberId,
      })
      .exec();

    if (existingVote) {
      throw new BadRequestException('O associado já votou nesta pauta.');
    }

    const createdVote = new this.voteModel(createVoteDto);
    return createdVote.save();
  }

  async countVotes(agendaId: string): Promise<{ yes: number; no: number }> {
    const votes = await this.voteModel.find({ agendaId }).exec();
    const yes = votes.filter((vote) => vote.vote).length;
    const no = votes.length - yes;

    return { yes, no };
  }
}
