import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Events {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    adress: string;

    @Column()
    image: string; 

    @Column()
    content: string;

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}