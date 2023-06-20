import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ScoreController } from './score.controller'
import { ScoreService } from './score.service'
import { Score } from './entities/score.entity'
import { RefreshSession } from '../auth/entities/refreshSession.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Score])],
  controllers: [ScoreController],
  providers: [ScoreService],
  exports: [ScoreService]
})
export class ScoreModule {}
