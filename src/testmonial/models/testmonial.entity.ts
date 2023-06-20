import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Testmonial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    title: string;

    @Column()
    image: string; 

    @Column()
    comment: string;

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}