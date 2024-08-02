import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize("RecipeApp", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  models: [__dirname + "/../models/**/*"], //To import and register models.
  logging: false,
});
