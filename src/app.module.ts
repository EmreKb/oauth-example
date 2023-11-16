import { Module } from '@nestjs/common';
import { AuthModule } from './moduels/auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
