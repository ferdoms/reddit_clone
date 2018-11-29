import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity()
export class Link{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({nullable: false})
    public link!: string;

    @Column({nullable: false})
    public title!: string;

    @ManyToOne(type => User)
    @JoinColumn() 
    user!: User;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;

}