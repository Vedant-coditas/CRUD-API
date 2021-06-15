import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getConnection } from 'typeorm';
import { Profile } from '../entities/profile.entity';
import { User } from '../entities/user.entity';
import { Photo } from '../entities/photo.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(_id: number): Promise<User> {
        return await this.userRepository.findOne({
            select: ["fullName", "isActive"],
            where:[{"id":_id}]
        });
    }

    updateUser(user:User) {
        return this.userRepository.save(user);
    }

    deleteUser(_id: number) {
        return this.userRepository.delete(_id);
    }

    /*async selectById() {
        const user = await getConnection()
            .createQueryBuilder()
            .select("user")
            .from(User,"user")
            .where("user.id = :id", {id: 6 })
            .getOne();
    }*/



}
