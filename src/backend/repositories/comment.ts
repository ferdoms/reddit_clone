import { getRepository } from 'typeorm';
import { Comment } from '../entities/comment';

export function commentRepository(){
    
    return getRepository(Comment);
}