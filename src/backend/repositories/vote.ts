import { getRepository } from 'typeorm';
import { Vote } from '../entities/vote';

export function voteRepository(){
    
    return getRepository(Vote);
}