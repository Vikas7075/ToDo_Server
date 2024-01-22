import express from "express"
import { User } from "../models/user.model.js";
import { getAllUsers, create } from "../controllers/user.js";

const router = express.Router();

router.get('/getAll', getAllUsers)

router.post('/create', create)

router.get('/userid/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);


    res.json({
        success: true,
        user,
    })
})

export default router;