import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Partner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string; 

    @Column()
    image: string;  

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}