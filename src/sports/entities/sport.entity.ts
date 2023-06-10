import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sports {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;
    

    @Column()
    place: string;

    @Column()
    date: string;

    @Column()
    time: string;



}
