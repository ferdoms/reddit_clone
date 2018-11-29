import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';
import { Link } from './link';

@Entity()
export class Vote{
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public isPositive!: boolean;

    @OneToOne(type => User)
    @JoinColumn() 
    user!: User;

    @OneToOne(type => Link)
    @JoinColumn() 
    link!: Link;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;

}