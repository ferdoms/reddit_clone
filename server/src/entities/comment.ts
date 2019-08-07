import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Link } from "./link";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public comment!: string;
    @ManyToOne(type => User, user => user.comment)
    public user!: User;
    @ManyToOne(type => Link, link => link.comment)
    public link!: Link;
}
