import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ENV } from 'src/core/config';
import { IPayload } from 'src/core/interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ENV.JWT_ACCESS_SECRET,
    };
    super(options);
  }

  async validate(payload: IPayload) {
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
