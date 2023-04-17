import { UserService } from "../../../services";

const userQueryResolvers = {
    Users: async () => {
        try {
            const users = await UserService.getUsers();
            return users;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    User: async (parent, args) => {
        try {
            const user = await UserService.getUser(args.id);
            return user;
        } catch (err) {
            throw new Error(err.message);
        }
    },
};


module.exports = userQueryResolvers