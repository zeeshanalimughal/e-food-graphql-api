import { CreateUserInput, SignInInput, UpdateUserInput, usergIdSchema } from "../graphql/schemas";
import Joi from "joi"
const { User } = require("../models");


export const signIn = async (input) => {
    try {
        await Joi.validate(input, SignInInput, { abortEarly: false });
        const user = await User.findOne({ Email: input.Email });
        if (!user) {
            throw new Error(`Incorrect email or password`);
        }
        const matchPassword = await user.matchesPassword(input.Password)
        if (!matchPassword) {
            throw new Error(`Incorrect email or password`);
        }
        user.AccessToken = getToken({ id: user._id, email: user.Email })
        return user
    } catch (err) {
        throw new Error(err.message);
    }
};

export const createUser = async (input) => {
    try {
        await Joi.validate(input, CreateUserInput, { abortEarly: false });
        const user = await User.create(input);
        return user
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getUsers = async (input) => {
    try {
        const users = await User.find();
        return users
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getUser = async (id) => {
    try {
        await Joi.validate({ id }, usergIdSchema, { abortEarly: false });

        const user = await User.findById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user
    } catch (err) {
        throw new Error(err.message);
    }
};

export const updateUser = async (id, input) => {
    try {
        await Joi.validate({ id }, usergIdSchema, { abortEarly: false });
        await Joi.validate(input, UpdateUserInput, { abortEarly: false });

        let user = await User.findById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        user = await User.findByIdAndUpdate(id, input, {
            new: true,
            runValidators: true,
        });
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteUser = async (id) => {
    try {
        await Joi.validate({ id }, usergIdSchema, { abortEarly: false });

        const user = await User.findById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        await User.findByIdAndDelete(id);
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};
