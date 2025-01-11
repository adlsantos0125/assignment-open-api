import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinksService } from './drinks/drinks.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DrinksService],
})
export class AppModule {}
