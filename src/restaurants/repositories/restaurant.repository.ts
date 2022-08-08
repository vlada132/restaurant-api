import { CustomRepository } from '~core/decorators/typeorm-ex.decorator';
import { BaseRepository } from '~core/repositories/base.repository';
import { RestaurantEntity } from '~restaurants/entities/restaurant.entity';

@CustomRepository(RestaurantEntity)
export class RestaurantRepository extends BaseRepository<RestaurantEntity> {}
