import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from '~restaurants/services/restaurant.service';

// just an example.
@Controller('a')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Get()
  async abc() {
    return this.restaurantService.getListRestaurant(1, 10);
  }
}
