import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName: string;

    @Column()
    isActive: boolean;

}
