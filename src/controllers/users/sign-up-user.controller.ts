import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { email, password, phoneNumber, address, role } = req.body;
    //test123456

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
    });
    res.status(200).send({ message: "user created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
