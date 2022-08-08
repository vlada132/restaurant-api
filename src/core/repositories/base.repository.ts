import { FindManyOptions, Repository } from 'typeorm';
import { Pagination } from '~core/interfaces/pagination.interface';

export abstract class BaseRepository<Entity> extends Repository<Entity> {
  async paginate(
    page: number,
    limit: number,
    query: FindManyOptions<Entity>,
  ): Promise<Pagination<Entity>> {
    const skip = (page - 1) * limit;
    const [data, total] = await this.findAndCount({
      ...query,
      take: limit,
      skip,
    });
    return {
      data,
      total,
      itemPerPage: limit,
      totalPage: Math.ceil(total / limit),
      currentPage: page,
    };
  }
}
