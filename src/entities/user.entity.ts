import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { Address } from "./address.entity"
import { Comment } from "./comment.entity"
import { Vehicle } from "./vehicle.entity"

// Relacionamento One to One com Address
// Relacionamento One to Many com Vehicle (Lado one)

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    cellPhone: string

    @Column()
    birthDate: string

    @Column()
    description: string

    @OneToOne((type) => Address, {
        eager: true
    })@JoinColumn()
    address: Address
    
    @Column()
    isAdvertiser: boolean

    @Column()
    password: string

    @Column()
    confirmPassword: string

    @OneToMany((type) => Vehicle, vehicle => vehicle.user, {
        eager: true,
        onDelete: "CASCADE"
    })
    vehicle: Vehicle[]  

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}