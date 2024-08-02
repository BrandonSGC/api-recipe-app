import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "recipe_categories",
  timestamps: false,
})
class RecipeCategory extends Model {
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

export default RecipeCategory;
