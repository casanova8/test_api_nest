import { RefreshSession } from '../../auth/entities/refreshSession.entity'
import { Entity, Column, PrimaryGeneratedColumn, Index, Unique, OneToMany } from 'typeorm'

@Entity()
// @Index( ['username'] )
// @Unique( 'username', ['username'] )
export class Score {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  score: number

}
