import { param } from "express-validator";

export const validateId = [
  param("id")
    .isInt()
    .withMessage("Invalid id")
    .custom((id) => id > 0)
    .withMessage("Id cannot be 0"),
];
