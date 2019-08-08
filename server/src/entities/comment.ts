import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Link } from "./link";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public content!: string;
  @Column({ nullable: true })
  public dateTime!: Date;
  @ManyToOne(type => User, user => user.comments)
  public user!: User;
  @ManyToOne(type => Link, link => link.comments)
  public link!: Link;
}
