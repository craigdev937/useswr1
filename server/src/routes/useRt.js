import express from "express";
import { indexHome } from "../controllers/useCon.js";

export const useRt = express.Router();
    useRt.get("/", indexHome);




