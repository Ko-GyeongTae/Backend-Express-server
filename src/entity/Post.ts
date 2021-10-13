import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('increment')
    pid: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    writer: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: string;
}