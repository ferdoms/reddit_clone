import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user';
import { Link } from './link';

@Entity()
export class Comment{
    
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({nullable: false})
    public comment!: string;

    @ManyToOne(type => User)
    // @JoinColumn() 
    user!: User;

    @ManyToOne(type => Link, link => link.comment, {onDelete:'CASCADE'})
    // @JoinColumn() 
    link!: Link;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;

}