import User from "../models/User";
import { Request, Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error has ocurred while getting the user..." });
  }
};