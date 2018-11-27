import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Link{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public link!: string;

    @Column()
    public title!: string;

    @OneToOne(type => User)
    @JoinColumn() 
    user!: User;
}