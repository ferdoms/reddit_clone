import { getRepository } from 'typeorm';
import { User } from '../entities/user';

export function linkRepository(){
    
    return getRepository(User);
}