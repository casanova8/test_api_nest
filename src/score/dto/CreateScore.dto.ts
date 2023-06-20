import { IsNotEmpty } from 'class-validator'

export class CreateScoreDto {

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  score: number

}
