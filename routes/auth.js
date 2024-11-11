import express from "express";
import { signin, signup } from "../controllers/auth.js"

const router = express.Router();

 //routes for sign up 
 router.post("/signup",signup)

 // routes for sign in
 router.post("/signin",signin)

 // routes for googleauth
 router.post("/google",)

export default router;