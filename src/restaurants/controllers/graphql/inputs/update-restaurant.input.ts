import { InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantInput } from './create-restaurant.input';

@InputType()
export class UpdateRestaurantInput extends PartialType(CreateRestaurantInput) {}
