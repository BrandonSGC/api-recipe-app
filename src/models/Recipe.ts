import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: false,
})
class Recipe extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @Column({
    type: DataType.STRING,
  })
  declare imageURL: string;

  @Column({
    type: DataType.STRING(60),
  })
  declare title: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare categoryId: number;
}

export default Recipe;
