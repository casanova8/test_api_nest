import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'

import { User } from './user/entities/user.entity'
import { Score } from './score/entities/score.entity'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { ScoreModule } from './score/score.module'
import { RefreshSession } from './auth/entities/refreshSession.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite3',
      synchronize: false,
      logging: false,
      entities: [User, RefreshSession, Score],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    AuthModule,
    ScoreModule
  ],
  controllers: [AppController]
})
export class AppModule {}
