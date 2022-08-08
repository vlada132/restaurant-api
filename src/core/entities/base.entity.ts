import { Field, Float, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field(() => Float, { description: 'Created At' })
  createdAt: number;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field(() => Float, { description: 'Updated At' })
  updatedAt: number;

  @DeleteDateColumn({ type: 'timestamp' })
  @Field(() => Float, { description: 'Deleted At' })
  deletedAt: number;
}
