import Book from "../models/Book.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

const getSingleBook = (req, res) => {
  res.json({ message: `Get book with ID: ${req.params.id}` });
};

const addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, description } = req.body;

    const newBook = await Book.create({
      title,
      author,
      publishedYear,
      description,
    });
    if (!newBook) {
      return res.status(400).json({
        success: false,
        message: "Failed to add book",
      });
    }
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding book",
      error: error.message,
    });
  }
};

const updateBook = (req, res) => {
  res.json({ message: `Update book with ID: ${req.params.id}` });
};

const deleteBook = (req, res) => {
  res.json({ message: `Delete book with ID: ${req.params.id}` });
};

export { getAllBooks, getSingleBook, addBook, updateBook, deleteBook };
