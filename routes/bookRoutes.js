import express from "express";
import {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.post("/", protect, addBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

export default router;
