import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github-oauth20';
import { ENV } from 'src/core/config';

export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const options = {
      clientID: ENV.GITHUB_CLIENT_ID,
      clientSecret: ENV.GITHUB_CLIENT_SECRET,
      callbackUrl: 'http://localhost:3000/auth/github/callback',
    };
    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    done(null, profile);
  }
}
