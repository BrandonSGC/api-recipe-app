import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: false,
})
class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(60),
  })
  declare name: string;

  @Column({
    type: DataType.STRING(30),
  })
  declare username: string;

  @Column({
    type: DataType.STRING(60),
  })
  declare email: string;

  @Column({
    type: DataType.STRING, // 255 characteres by default...
  })
  declare password: string;
}

export default User;
