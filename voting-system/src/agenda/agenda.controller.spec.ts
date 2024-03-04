import { Test, TestingModule } from '@nestjs/testing';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';

const mockAgendaService = {
  findAll: jest
    .fn()
    .mockResolvedValue([
      { id: '1', title: 'Test Agenda', description: 'This is a test' },
    ]),
};

describe('AgendaController', () => {
  let controller: AgendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendaController],
      providers: [
        {
          provide: AgendaService,
          useValue: mockAgendaService,
        },
      ],
    }).compile();

    controller = module.get<AgendaController>(AgendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of agendas', async () => {
    expect(await controller.findAll()).toEqual([
      { id: '1', title: 'Test Agenda', description: 'This is a test' },
    ]);
    expect(mockAgendaService.findAll).toHaveBeenCalled();
  });
});
