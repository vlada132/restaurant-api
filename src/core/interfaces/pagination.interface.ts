import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

export interface Pagination<T> {
  data: T[];
  total: number;
  itemPerPage: number;
  totalPage: number;
  currentPage: number;
}

export function Paginated<T>(itemType: Type<T>): Type<Pagination<T>> {
  @ObjectType({ isAbstract: true })
  abstract class Paginated implements Pagination<T> {
    @Field(() => [itemType])
    data: T[];

    @Field()
    total: number;

    @Field()
    itemPerPage: number;

    @Field()
    totalPage: number;

    @Field()
    currentPage: number;
  }

  return Paginated as Type<Pagination<T>>;
}
