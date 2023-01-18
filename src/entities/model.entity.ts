import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  DatabaseType,
} from 'typeorm';

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @CreateDateColumn({type: 'timestamptz'})
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // @UpdateDateColumn({type: 'timestamptz'})
  // @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Column({
    type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
    transformer: { 
      to(value) {
        // Transform 'invoiceNumber'
        // console.info("test",value)
        // return value;
        // return '2020-03-25 12:00:00.123';
      },
      from(value) {
        // Do nothing
        return `${value}`;
      }
         
    }
})
  updatedAt: Date;
}
