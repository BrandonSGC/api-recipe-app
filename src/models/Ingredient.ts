import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "ingredients",
  timestamps: false,
})
class Ingredient extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(60),
  })
  declare name: string;
}

export default Ingredient;
