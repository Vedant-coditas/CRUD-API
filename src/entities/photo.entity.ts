import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url: string;

}