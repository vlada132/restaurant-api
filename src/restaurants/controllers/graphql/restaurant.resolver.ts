import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Pagination } from '~core/interfaces/pagination.interface';
import { CustomUuidScalar } from '~core/scalars/uuid.scalar';
import { RestaurantEntity } from '~restaurants/entities/restaurant.entity';
import { RestaurantService } from '~restaurants/services/restaurant.service';
import { CreateRestaurantInput } from './inputs/create-restaurant.input';
import { UpdateRestaurantInput } from './inputs/update-restaurant.input';
import { PaginatedAuthor } from './object-types/paginated.object-type';

@Resolver(() => RestaurantEntity)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => PaginatedAuthor)
  async getListRestaurant(
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
    @Args('search', { type: () => String, nullable: true }) search: string,
  ): Promise<Pagination<RestaurantEntity>> {
    return this.restaurantService.getListRestaurant(page, limit, search);
  }

  @Mutation(() => RestaurantEntity)
  async createRestaurant(
    @Args('payload') payload: CreateRestaurantInput,
  ): Promise<RestaurantEntity> {
    return this.restaurantService.createRestaurant(payload);
  }

  @Mutation(() => RestaurantEntity)
  async updateRestaurant(
    @Args('id', { type: () => CustomUuidScalar, nullable: false }) id: string,
    @Args('payload') payload: UpdateRestaurantInput,
  ): Promise<RestaurantEntity> {
    return this.restaurantService.updateRestaurant(id, payload);
  }

  @Mutation(() => Boolean)
  async deleteRestaurant(
    @Args('id', { type: () => CustomUuidScalar, nullable: false }) id: string,
  ): Promise<boolean> {
    return this.restaurantService.deleteRestaurant(id);
  }
}
