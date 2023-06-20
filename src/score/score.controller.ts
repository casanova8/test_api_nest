import { Body, Controller,UseGuards, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common'

import { CreateScoreDto } from './dto/CreateScore.dto'
// import { UpdateUserDto } from './dto/UpdateUser.dto'
import { Score } from './entities/score.entity'
import { ScoreService } from './score.service'
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard'
@Controller()
export class ScoreController {

  constructor(
    private scoreService: ScoreService
  ) {}

  @Get('/leaderboard')
  async getScore(): Promise<Score[]> {
    return await this.scoreService.getAllScore()
  }

  // @Get('/user/:id')
  // async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
  //   return await this.userService.getUserById(id)
  // }

  @Post('/scores')
  @UseGuards(JwtAuthGuard)
  async createScore(@Body() createScoreDto: CreateScoreDto) {
    return await this.scoreService.createScore(createScoreDto)
  }

  // @Delete('/user/:id')
  // async removeUser(@Param('id') id: number) {
  //   return await this.userService.removeUser(id)
  // }
  //
  // @Put('/user/:id')
  // async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
  //   return await this.userService.updateUser(id, updateUserDto)
  // }

}
