import express from "express";

const router = express.Router();

router.get("/create", (req, res) => {
    // business logic of creating a user account
});

router.get("/getall", (req, res) => {
    // business logic of getall a user account
});

router.get("/get/:id", (req, res) => {
    // business logic of getting a single user
});
router.get("/delete/:id", (req, res) => {
    // business logic of deleting a user 
});
router.get("/uodate/:id", (req, res) => {
    // business logic of updating a user 
});