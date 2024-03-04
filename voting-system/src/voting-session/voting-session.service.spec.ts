import { Test, TestingModule } from '@nestjs/testing';
import { VotingSessionService } from './voting-session.service';
import { getModelToken } from '@nestjs/mongoose';
import { VotingSession } from './schemas/voting-session.schema';

describe('VotingSessionService', () => {
  let service: VotingSessionService;
  let mockModel: any;

  beforeEach(async () => {
    mockModel = {
      new: jest.fn().mockResolvedValue(mockModel),
      constructor: jest.fn().mockResolvedValue(mockModel),
      find: jest.fn(),
      create: jest.fn().mockResolvedValue(mockModel),
      save: jest.fn().mockResolvedValue(mockModel),
      exec: jest.fn().mockResolvedValue([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VotingSessionService,
        {
          provide: getModelToken(VotingSession.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<VotingSessionService>(VotingSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
