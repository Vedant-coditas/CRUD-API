import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    selectById(id: any): Promise<User>;
    create(user: User): Promise<User>;
    update(user: User): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
