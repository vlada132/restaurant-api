import { Module } from '@nestjs/common';
import { AppResolver } from '~app.resolver';
import { graphQLConfig } from '~config/graphql.config';
import { throttlerConfig } from '~config/throttler.config';
import { RestaurantModule } from '~restaurants/restaurant.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
@Module({
  imports: [databaseConfig, throttlerConfig, graphQLConfig, RestaurantModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
