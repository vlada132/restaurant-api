import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRestaurant1659938977234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE restaurant (
        id uuid DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        address TEXT,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL,
        CONSTRAINT restaurant_id_PK PRIMARY KEY (id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE restaurant`);
  }
}
