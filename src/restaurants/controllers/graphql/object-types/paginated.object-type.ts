import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '~core/interfaces/pagination.interface';
import { RestaurantEntity } from '~restaurants/entities/restaurant.entity';

@ObjectType()
export class PaginatedAuthor extends Paginated(RestaurantEntity) {}
