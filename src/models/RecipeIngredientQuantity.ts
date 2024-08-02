import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "ingredients",
  timestamps: false,
})
class RecipeIngredientQuantity extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare ingredientId: number;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  declare recipeId: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare quantity: number;
}

export default RecipeIngredientQuantity;
