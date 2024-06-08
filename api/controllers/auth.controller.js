import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // HASH THE PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    // CREATE NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    res.status(201).json(newUser);

    console.log(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
