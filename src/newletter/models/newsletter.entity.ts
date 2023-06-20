import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsLetter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}