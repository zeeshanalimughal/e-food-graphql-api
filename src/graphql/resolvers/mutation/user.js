import { UserService } from "../../../services";



const userMutationResolvers = {
  CreateUser: async (parent, { id, input }) => {
    try {
      const user = await UserService.createUser(input);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  UpdateUser: async (parent, { id, input }) => {
    try {
      const user = await UserService.updateUser(id, input);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  DeleteUser: async (parent, { id, input }) => {
    try {
      const user = await UserService.deleteUser(id);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = userMutationResolvers;
