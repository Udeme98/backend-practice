const registerUser = async (req, res) => {
  res.json({ message: "User registered successfully" });
};

const loginUser = async (req, res) => {
  res.json({ message: "User logged in successfully" });
};

export { registerUser, loginUser };
