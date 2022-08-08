import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '~typeorm-ex';
import { RestaurantResolver } from './controllers/graphql/restaurant.resolver';
import { RestaurantController } from './controllers/http/restaurant.controller';
import { RestaurantEntity } from './entities/restaurant.entity';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { RestaurantService } from './services/restaurant.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([
      RestaurantRepository,
      RestaurantEntity,
    ]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
