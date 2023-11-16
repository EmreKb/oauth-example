import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  async login(loginDto: LoginDto) {
    const token = await this.jwtService.signAsync({ ...loginDto });
    return { accessToken: token };
  }
}
