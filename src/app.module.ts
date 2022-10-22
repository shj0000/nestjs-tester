import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacebookController } from './facebook/facebook.controller';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, FacebookController, TestController],
  providers: [AppService],
})
export class AppModule {}
