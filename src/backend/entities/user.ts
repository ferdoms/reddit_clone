import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsString, Length } from 'class-validator'
import { Link } from './link';
import { Comment } from './comment';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({nullable: false, unique:true })
    public email!: string;
    
    @Column({ length: 8 , nullable: false })
    public password!: string;

    @OneToMany(type => Link, link => link.user, {
        eager: true
    })
    links!: Link[];
    
    @OneToMany(type => Comment, comment => comment.user, {
        eager: true
    })
    comments!: Comment[];
    
    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;
    
    public getActivities(){
        let activities:any = [];

        if(this.links || this.comments){
        this.links.forEach(link=>{
            Object.assign(link, {type:"link"})
            activities.push(link)
        })
        this.comments.forEach(comments=>{
            Object.assign(comments, {type:"comment"})
            activities.push(comments)
        })}

        return activities;
    }


}