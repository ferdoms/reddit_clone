import { getRepository } from 'typeorm';
import { Comment } from '../entities/comment';

export function linkRepository(){
    
    return getRepository(Comment);
}