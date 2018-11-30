import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user';
import { Comment } from './comment';
import { Vote } from './vote';

@Entity()
export class Link{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({nullable: false})
    public link!: string;

    @Column({nullable: false})
    public title!: string;

    @ManyToOne(type => User)
    user!: User;

    @OneToMany(type => Comment, comment => comment.link, {eager: true})
    comment!: Comment[];

    @OneToMany(type => Vote, vote => vote.link)
    vote!: Vote[];

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;
    
}