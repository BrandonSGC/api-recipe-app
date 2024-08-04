import { Router } from "express";
import { getUserById, updateUser } from "../controllers/user.controllers";
import { validateRequest } from "../middlewares/validateRequest";
import { validateId } from "../middlewares/validateId";

const router = Router();

// TODO: Create isAuthenticated middleware

router.get("/:id", validateId, validateRequest, getUserById);
router.put("/:id", validateId, validateRequest, updateUser); // -> REQUIRES AUTHENTICATION

export default router;
