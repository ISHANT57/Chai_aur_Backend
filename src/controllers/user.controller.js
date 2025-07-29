// import { asyncHandler } from "../utils/asyncHandler";

// const registerUser = asyncHandler(async (req, res) => {
//     return res.status(200).json({ message: "Register User" });
// });



// export { registerUser};

// src/controllers/user.controller.js
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";  // create schema first

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(409, "User already exists with this email");
  }

  const user = await User.create({ name, email, password });

  return res
    .status(201)
    .json(new ApiResponse(201, { user }, "User created successfully"));
});

export { registerUser };
