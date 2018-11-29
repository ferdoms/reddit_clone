import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Link } from './link';
import { Comment } from './comment';
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public email!: string;
    
    @Column()
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