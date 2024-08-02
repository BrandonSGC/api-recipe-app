import { Router } from "express";
import { getUserById } from "../controllers/user.controllers";

const router = Router();

// TODO: Validate data with express-validator.
// TODO: Create middleware to handle the input errors.
router.get("/:id", getUserById);

export default router;
