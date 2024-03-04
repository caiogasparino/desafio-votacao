import {
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  IsMongoId,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVotingSessionDto {
  @IsNotEmpty({ message: 'O ID da pauta é obrigatório.' })
  @IsMongoId({
    message: 'O ID da pauta deve ser um identificador válido do MongoDB.',
  })
  agendaId: string;

  @IsOptional()
  @IsNumber({}, { message: 'A duração deve ser um número.' })
  @Min(1, { message: 'A duração deve ser de pelo menos 1 minuto.' })
  durationInMinutes?: number;

  @IsOptional()
  @IsDate({ message: 'A data de início deve ser uma data válida.' })
  @Type(() => Date)
  startTime?: Date;

  @IsOptional()
  @IsDate({ message: 'A data de término deve ser uma data válida.' })
  @Type(() => Date)
  endTime?: Date;
}
