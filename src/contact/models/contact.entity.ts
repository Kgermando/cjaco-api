import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone: string; 

    @Column()
    subject: string;

    @Column()
    message: string;

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}