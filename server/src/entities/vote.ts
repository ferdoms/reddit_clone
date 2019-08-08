import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Link } from "./link";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public isPositive!: boolean;
  @Column({ nullable: true })
  public dateTime!: Date;
  @ManyToOne(type => Link, link => link.votes)
  public link!: Link;
  @ManyToOne(type => User, user => user.votes)
  public user!: User;
}
