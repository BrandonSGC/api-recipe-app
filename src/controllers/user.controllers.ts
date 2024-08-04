import { Request, Response } from "express";
import User from "../models/User";

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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, username, email, password } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Not user found" });
    }

    await user.update({
      name,
      username,
      email,
      password,
    });

    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res
      .status(200)
      .json({ message: "An error has ocurred while updating the user..." });
  }
};
