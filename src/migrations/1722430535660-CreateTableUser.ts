import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1722430535660 implements MigrationInterface {
  name = 'CreateTableUser1722430535660';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(50) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(80) NOT NULL, \`lastname\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
