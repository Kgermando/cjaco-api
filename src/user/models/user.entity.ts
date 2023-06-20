import { Exclude } from "class-transformer"; 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    fullname: string; 

    @Column()
    email: string;

    // Accès
    @Column({unique : true}) 
    telephone: string;  

    @Column({default: 'User'})
    role: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}