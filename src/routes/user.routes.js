import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// router.get("/", (req, res) => {
//     res.send("user");
// });

router.route("/register").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1
    },
    {
        name: "banner",
        maxCount: 1
    }]),
    registerUser);

export const userRouter = router;
