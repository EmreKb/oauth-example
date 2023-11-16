import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { IPayload } from 'src/core/interface';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  async login(loginDto: LoginDto) {
    // validate user and password
    const token = await this.getToken({
      sub: 'userid',
      username: loginDto.username,
    });
    return { accessToken: token };
  }

  async getToken(payload: IPayload) {
    return await this.jwtService.signAsync(payload);
  }
}
