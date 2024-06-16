import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
import { userInfo } from "os";

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

    res.status(201).json({ message: "User Created Successfully", newUser });

    console.log(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // CHECK IF THE USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // CHECK USER PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("Success");
    const age = 1000 * 60 * 60 * 24 * 7; // 1ms * a minute * a hour * a day * 7 days

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        //   secure: true,
        maxAge: age, // Set token expiration
      })
      .status(200)
      .json({ message: "Login Successful", userInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to logout" });
  }
};
