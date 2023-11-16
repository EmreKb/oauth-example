import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard('github'))
  @Get('login/github')
  async githubLogin() {}

  @UseGuards(AuthGuard('github'))
  @Get('github/callback')
  async githubCallback(@Req() req: any, @Res() res: any) {
    const accessToken = await this.authService.getToken({
      sub: req.user.id.toString(),
      username: req.user.username,
    });
    return res.json({ accessToken });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('token-verify')
  async tokenInfo() {
    return 'Ok';
  }
}
