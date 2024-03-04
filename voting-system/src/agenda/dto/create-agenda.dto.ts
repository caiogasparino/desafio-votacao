import { IsNotEmpty, IsString, IsOptional, Length } from 'class-validator';

export class CreateAgendaDto {
  @IsNotEmpty({ message: 'O título é obrigatório e não pode estar vazio.' })
  @IsString({ message: 'O título deve ser uma string.' })
  @Length(3, 100, { message: 'O título deve ter entre 3 e 100 caracteres.' })
  title: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  description?: string;
}
