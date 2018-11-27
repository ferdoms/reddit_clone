import { getRepository } from 'typeorm';
import { Link } from '../entities/link';

export function linkRepository(){
    
    return getRepository(Link);
}