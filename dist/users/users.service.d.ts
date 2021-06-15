import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(_id: number): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUser(_id: number): Promise<import("typeorm").DeleteResult>;
}
