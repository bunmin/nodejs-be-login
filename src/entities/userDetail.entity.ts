import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import Model from './model.entity';
import { User } from './user.entity';

@Entity('user_details')
export class userDetail extends Model {
  @Column({
    unique: true,
  })
  nickname: string;

  @OneToOne(() => User, (user) => user.detail)
  @JoinColumn()
  user: User;
}
