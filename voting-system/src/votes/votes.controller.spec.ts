import { Test, TestingModule } from '@nestjs/testing';
import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';

describe('VotesController', () => {
  let controller: VotesController;
  let service: VotesService;

  beforeEach(async () => {
    const mockVotesService = {
      create: jest.fn((dto) => {
        return {
          ...dto,
          id: 'someId',
        };
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotesController],
      providers: [
        {
          provide: VotesService,
          useValue: mockVotesService,
        },
      ],
    }).compile();

    controller = module.get<VotesController>(VotesController);
    service = module.get<VotesService>(VotesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a vote', async () => {
    const createVoteDto: CreateVoteDto = {
      agendaId: 'validAgendaId',
      memberId: 'validMemberId',
      vote: true,
    };

    expect(await controller.create(createVoteDto)).toEqual({
      ...createVoteDto,
      id: expect.any(String),
    });

    expect(service.create).toHaveBeenCalledWith(createVoteDto);
  });
});
