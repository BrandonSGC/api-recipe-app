import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "recipe_categories",
  timestamps: false,
})
class RecipeStep extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare recipeId: number;
}

export default RecipeStep;
