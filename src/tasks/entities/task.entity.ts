import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

// export enum TaskStatus {
//     Created = 'Created',
//     Received = 'Received',
//     Completed = 'Completed'
// }

@Table({
    tableName: 'tasks'
})
export class Task extends Model {
    @PrimaryKey
    @Column({type: DataType.UUIDV4, defaultValue: DataType.UUIDV4})
    id: string
    
    @Column({type: DataType.STRING, allowNull: false})
    title: string

}
