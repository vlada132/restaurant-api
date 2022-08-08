import { MigrationInterface, QueryRunner } from 'typeorm';
import { faker } from '@faker-js/faker';
export class InsertDefaultRestaurant1659943614549
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    let str = '';
    const array = Array(100).fill('item');
    array.forEach(
      (item, index) =>
        (str += `('${faker.company.companyName()}', '${faker.internet.email()}', '${faker.phone.number()}', '${faker.address.city()}')${
          index !== array.length - 1 ? ',' : ''
        }`),
    );
    await queryRunner.query(`
        INSERT INTO restaurant (name, email, phone, address) VALUES ${str}
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM restaurant');
  }
}
