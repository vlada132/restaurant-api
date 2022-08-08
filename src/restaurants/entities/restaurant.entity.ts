import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '~core/entities/base.entity';

@Entity('restaurant')
@ObjectType()
export class RestaurantEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  name: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  phone: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  address: string;
}
