import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import { Link } from "./link";

@Entity()
export class Vote {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public vote!: boolean;
    @ManyToOne(type=> Link, link => link.vote)
    public link!:Link;
    @ManyToOne(type=> User)
    public user!:User;
}
