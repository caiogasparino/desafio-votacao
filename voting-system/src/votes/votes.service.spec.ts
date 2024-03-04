import { Test, TestingModule } from '@nestjs/testing';
import { VotesService } from './votes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Vote } from './schemas/vote.schema';

describe('VotesService', () => {
  let service: VotesService;
  let mockVoteModel;

  beforeEach(async () => {
    mockVoteModel = {
      create: jest.fn().mockImplementation((dto) => Promise.resolve(dto)),
      findOne: jest.fn().mockResolvedValue(null),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VotesService,
        {
          provide: getModelToken(Vote.name),
          useValue: mockVoteModel,
        },
      ],
    }).compile();

    service = module.get<VotesService>(VotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
