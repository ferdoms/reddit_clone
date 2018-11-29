import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Link{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column([{nullable: false}])
    public link!: string;

    @Column([{nullable: false}])
    public title!: string;

    @OneToOne(type => User)
    @JoinColumn() 
    user!: User;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;
}