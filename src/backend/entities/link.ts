import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link{
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public userID!: number;
    @Column()
    public link!: string;
    @Column()
    public title!: string;
}