import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Link } from "./link";
import { Comment } from "./comment";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public email!: string;
    @Column()
    public password!: string;
    @OneToMany(type => Link, link => link.user)
    link!:Link[];
    @OneToMany(type => Comment, comment => comment.user )
    comment!:Comment[];
}
