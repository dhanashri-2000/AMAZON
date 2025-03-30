import express from "express";
import { createpost, deletepost, getalltpost, getpost, updatepost } from "../controllers/post.controllers";

const router = express.Router();

router.post("/create", createpost);
router.post("/get/:id", getpost);
router.post("/getall", getalltpost);
router.post("/update/:id", uodatepost);
router.post("/delete/:id", deletepost);

export default router;