import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateScoreDto } from './dto/CreateScore.dto'

import { Score } from './entities/score.entity'

@Injectable()
export class ScoreService {

  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>
  ) {}

  async getAllScore(): Promise<Score[]> {
    return await this.scoreRepository.find({ select: ['username', 'score'] })
  }

  async createScore(createScoreDto: CreateScoreDto) {
    let newScore = new Score()
console.log(createScoreDto.score)
    newScore.username = createScoreDto.username
    newScore.score = Number(createScoreDto.score)
    console.log(newScore.score)

    return await this.scoreRepository.save(newScore)
  }

}
