import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
import { Vote } from "./vote";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column({ unique: true })
  public title!: string;
  @Column()
  public content!: string;
  @Column({ nullable: true})
  public dateTime!: Date;
  @ManyToOne(type => User, user => user.links)
  public user!: User;
  @OneToMany(type => Vote, vote => vote.link)
  public votes!: Vote[];
  @OneToMany(type => Comment, comment => comment.link)
  public comments!: Comment[];
}
