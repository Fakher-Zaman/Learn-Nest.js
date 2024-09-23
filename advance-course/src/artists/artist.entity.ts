import { User } from "src/users/user.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('artists')
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    // A user can register as an artist
    // Each artist will have only a user profile
    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}