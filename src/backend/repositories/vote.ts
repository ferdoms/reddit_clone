import { getRepository } from 'typeorm';
import { Vote } from '../entities/vote';

export function linkRepository(){
    
    return getRepository(Vote);
}