import { Controller, Get, UseGuards,Post,Req,Param,Body } from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard'
import { Public } from './auth/common/public-auth.guard'
import { User } from './auth/common/user.decorator'
import { ScoreService } from './score/score.service'

@Controller()
export class AppController {

  // @Public()
  // @Get('/leaderboard')
  // leaderboardRoute(): string {
  //   return this.scoreService.getAllScore()
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/private')
  privateRoute(@User() user): string {
    return `Private route: Hello ${user.username}`
  }

  // @UseGuards(JwtAuthGuard)
  // @Post('/scores')
  // score(@User() user, @Req() req: Request, @Body() body: {score:number}): string {
  //     console.log(body)
  //   return `Private route: Hello ${user.username}`
  // }
}
