import { getRepository } from 'typeorm';
import { User } from '../entities/user';

export function userRepository(){
    
    return getRepository(User);
}