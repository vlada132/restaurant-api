import { BadRequestException, Injectable } from '@nestjs/common';
import { FindManyOptions, Like, Not } from 'typeorm';
import { Pagination } from '~core/interfaces/pagination.interface';
import { CreateRestaurantInput } from '~restaurants/controllers/graphql/inputs/create-restaurant.input';
import { UpdateRestaurantInput } from '~restaurants/controllers/graphql/inputs/update-restaurant.input';
import { RestaurantEntity } from '~restaurants/entities/restaurant.entity';
import { RestaurantRepository } from '~restaurants/repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private restaurantRepo: RestaurantRepository) {}

  async getListRestaurant(
    page: number,
    limit: number,
    search?: string,
  ): Promise<Pagination<RestaurantEntity>> {
    const condition: FindManyOptions<RestaurantEntity> = {
      order: {
        createdAt: 'DESC',
      },
    };
    if (search) {
      condition.where = [
        { name: Like(`%${search}%`) },
        { email: Like(`%${search}%`) },
        { phone: Like(`%${search}%`) },
      ];
    }
    return this.restaurantRepo.paginate(page, limit, condition);
  }

  async createRestaurant(
    payload: CreateRestaurantInput,
  ): Promise<RestaurantEntity> {
    const restaurant = await this.restaurantRepo.findOne({
      where: { email: payload.email },
    });
    if (restaurant) {
      throw new BadRequestException(
        'Another restaurant with the same email has existed',
      );
    }
    return this.restaurantRepo.save(payload);
  }

  async updateRestaurant(
    id: string,
    payload: UpdateRestaurantInput,
  ): Promise<RestaurantEntity> {
    const restaurant = await this.restaurantRepo.findOneByOrFail({ id });
    if (payload.email) {
      const existedEmail = await this.restaurantRepo.findOne({
        where: { id: Not(id), email: payload.email },
      });
      if (existedEmail) {
        throw new BadRequestException(
          'Another restaurant with the same email has existed',
        );
      }
    }
    return this.restaurantRepo.save({
      id: restaurant.id,
      ...restaurant,
      ...payload,
    });
  }

  async deleteRestaurant(id: string): Promise<boolean> {
    await this.restaurantRepo.delete({ id });
    return true;
  }
}
