// src/votes/dto/create-vote.dto.ts
import { IsNotEmpty, IsBoolean, IsMongoId } from 'class-validator';

export class CreateVoteDto {
  @IsNotEmpty({ message: 'O ID da pauta é obrigatório.' })
  @IsMongoId({
    message: 'O ID da pauta deve ser um identificador válido do MongoDB.',
  })
  agendaId: string;

  @IsNotEmpty({ message: 'O ID do associado é obrigatório.' })
  @IsMongoId({
    message: 'O ID do associado deve ser um identificador válido do MongoDB.',
  })
  memberId: string;

  @IsNotEmpty({ message: 'O voto é obrigatório.' })
  @IsBoolean({ message: 'O voto deve ser do tipo booleano.' })
  vote: boolean;
}
