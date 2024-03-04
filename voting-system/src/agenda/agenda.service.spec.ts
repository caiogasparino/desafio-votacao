import { Test, TestingModule } from '@nestjs/testing';
import { AgendaService } from './agenda.service';
import { getModelToken } from '@nestjs/mongoose';
import { Agenda } from './schemas/agenda.schema';

describe('AgendaService', () => {
  let service: AgendaService;
  let mockAgendaModel;

  beforeEach(async () => {
    mockAgendaModel = {
      find: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(['agenda1', 'agenda2']),
      save: jest
        .fn()
        .mockImplementation((agenda) =>
          Promise.resolve({ _id: 'mockId', ...agenda }),
        ),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgendaService,
        {
          provide: getModelToken(Agenda.name),
          useValue: mockAgendaModel,
        },
      ],
    }).compile();

    service = module.get<AgendaService>(AgendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all agendas', async () => {
    expect(await service.findAll()).toEqual(['agenda1', 'agenda2']);
    expect(mockAgendaModel.find).toHaveBeenCalled();
  });
});
