import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Link } from "./link";
import { Comment } from "./comment";
import { Vote } from "./vote";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column({ unique: true })
  public email!: string;
  @Column()
  public password!: string;
  @Column({ nullable: true })
  public pic!: string;
  @Column({ nullable: true })
  public bio!: string;
  @OneToMany(type => Link, link => link.user)
  public links!: Link[];
  @OneToMany(type => Comment, comment => comment.user)
  public comments!: Comment[];
  @OneToMany(type => Vote, vote => vote.user)
  public votes!: Vote[];
}
