import { User } from "../models/user.model.js";


export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    console.log(req.query);
    res.json({
        success: true,
        users
    })
}


export const create = async (req, res) => {

    const { name, email, password } = req.body;

    await User.create({
        name,
        password,
        email
    });
    res.status(201).cookie("temp", "lololo").json({
        success: true,
        message: "User created...."
    })
}


