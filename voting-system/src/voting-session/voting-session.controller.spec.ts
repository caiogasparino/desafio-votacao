import { Test, TestingModule } from '@nestjs/testing';
import { VotingSessionController } from './voting-session.controller';
import { VotingSessionService } from './voting-session.service';
import { CreateVotingSessionDto } from './dto/create-voting-session.dto';

describe('VotingSessionController', () => {
  let controller: VotingSessionController;
  let service: VotingSessionService;

  beforeEach(async () => {
    const mockVotingSessionService = {
      open: jest.fn((dto: CreateVotingSessionDto) => {
        return {
          ...dto,
          id: 'someId',
        };
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotingSessionController],
      providers: [
        {
          provide: VotingSessionService,
          useValue: mockVotingSessionService,
        },
      ],
    }).compile();

    controller = module.get<VotingSessionController>(VotingSessionController);
    service = module.get<VotingSessionService>(VotingSessionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should open a voting session', async () => {
    const createVotingSessionDto: CreateVotingSessionDto = {
      agendaId: 'validAgendaId',
    };

    expect(await controller.open(createVotingSessionDto)).toEqual({
      ...createVotingSessionDto,
      id: expect.any(String),
    });
    expect(service.open).toHaveBeenCalledWith(createVotingSessionDto);
  });
});
