import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gastronomies {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    planner: string;

    @Column()
    place: string;

    @Column()
    date: string;

    @Column()
    time: string;



}
