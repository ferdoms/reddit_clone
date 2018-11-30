import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm';
import { User } from './user';
import { Link } from './link';

@Entity()
@Index(["user", "link"], { unique: true })
export class Vote{
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public isUpvoted!: boolean;

    @ManyToOne(type => User)
    // @JoinColumn() 
    user!: User;

    @ManyToOne(type => Link, link => link.vote, { onDelete: 'CASCADE'})
    // @JoinColumn() 
    link!: Link;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;

}