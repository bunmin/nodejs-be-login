import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserDetail1673945938589 implements MigrationInterface {
    name = 'addedUserDetail1673945938589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nickname" character varying NOT NULL, "userId" uuid, CONSTRAINT "UQ_182a355d5a26d08ccf459928eb4" UNIQUE ("nickname"), CONSTRAINT "REL_5261d2468b1288b347d58e8b54" UNIQUE ("userId"), CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD CONSTRAINT "FK_5261d2468b1288b347d58e8b540" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" DROP CONSTRAINT "FK_5261d2468b1288b347d58e8b540"`);
        await queryRunner.query(`DROP TABLE "user_details"`);
    }

}
