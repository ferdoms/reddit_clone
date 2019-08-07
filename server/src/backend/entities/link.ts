import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { getVoteRepository } from "../repositories/vote_repository";
import { User } from "./user";
import { Comment } from "./comment";
import { Vote } from "./vote";

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public link!: string;
    @Column()
    public title!: string;
    @ManyToOne(type => User, user => user.link)
    user!:User;
    @OneToMany(type => Vote, vote => vote.link)
    vote!:Vote[];
    @OneToMany(type => Comment, comment => comment.link)
    comment!:Comment[];
}
