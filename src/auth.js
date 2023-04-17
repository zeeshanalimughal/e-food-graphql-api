import { AuthenticationError } from "apollo-server";
import { User } from "./models";
const bcrypt = require("bcrypt");
require("dotenv").config();

export const attemptSignIn = async (email, password) => {
  try {
    const message = "Incorrect email/password. Please try again.";

    // If not the super admin, look for a normal user
    const user = await User.findOne({ Email: email });
    if (!user) {
      throw new AuthenticationError(message);
    }
    if (!(await user.matchesPassword(password))) {
      throw new AuthenticationError(message);
    }

    return user;
  } catch (err) {
    console.error(err);
    throw new AuthenticationError(err.message);
  }
};


export const ensureSignIn = (req) => {
  if (!req.headers.authorization) {
    throw new AuthenticationError("You must sign in to proceed.");
  }
};

export const ensureSignOut = (req) => {
  if (req.headers.authorization) {
    throw new AuthenticationError("You are already signed in.");
  }
};

export const signOut = (req, res) => {
  req.headers.authorization = "";
  return new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
