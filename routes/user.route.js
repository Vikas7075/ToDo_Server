import express from "express"
import { getAllUsers, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/new', register);
router.post('/login', login);

router.get('/logout', logout);
router.get("/me", isAuthenticated, getMyProfile);

// router.get('/userid/:id', async (req, res) => {
//     const { id } = req.params;
//     const user = await User.findById(id);


//     res.json({
//         success: true,
//         user,
//     })
// })

export default router;