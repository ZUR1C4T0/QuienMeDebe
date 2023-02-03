import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User {
  @ObjectIdColumn({})
  id: string

  @Column({ unique: true })
  username: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @CreateDateColumn({ type: 'timestamp', default: new Date() })
  createdAt: string

  @UpdateDateColumn({ type: 'timestamp', default: new Date() })
  updatedAt: string
}
