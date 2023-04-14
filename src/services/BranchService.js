import { Branch } from '../models';
import { createBranchSchema, updateBranchSchema, branchIdSchema } from '../graphql/schemas';
import Joi from 'joi';
export async function getBranch(id) {
    try {
        await Joi.validate({ id }, branchIdSchema, { abortEarly: false });
        const branch = await Branch.findById(id);
        return branch;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function createBranch(input) {
    try {
        await Joi.validate(input, createBranchSchema, { abortEarly: false });
        const branch = new Branch(input);
        await branch.save();
        return branch;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function updateBranch(id, input) {
    try {
        await Joi.validate(input, updateBranchSchema);
        await Joi.validate({ id }, branchIdSchema, { abortEarly: false });
        const branch = await Branch.findByIdAndUpdate(
            id,
            { $set: input },
            { new: true },
        );
        return branch;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function deleteBranch(id) {
    try {
        await Joi.validate({ id }, branchIdSchema, { abortEarly: false });
        const branch = await Branch.findByIdAndDelete(id);
        return branch;
    } catch (err) {
        throw new Error(err.message);
    }
}

