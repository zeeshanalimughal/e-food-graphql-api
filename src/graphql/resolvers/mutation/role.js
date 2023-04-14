const { ApolloError } = require("apollo-server");
const { Role, Organization, User } = require("../../../models");
import { createRole, updateRole, deleteRole, objectId } from "../../schemas";
import Joi from "joi";
import { UserInputError } from "apollo-server";
const { ObjectId } = require("mongoose").Types;

const roleMutationResolvers = {
  CreateRole: async (parent, args, context, info) => {
    if (!context.user) {
      throw new Error("You must be logged in to create a role");
    }
    if (context.user.role !== "Super Admin") {
      throw new Error("You are not authorized to create a role");
    }
    // Validation with Joi
    await Joi.validate(args, createRole, { abortEarly: false });

    // Check if role with the same name already exists
    const existingRole = await Role.findOne({ name: args.name });
    if (existingRole)
      throw new UserInputError("Role with the same name already exists");

    // Create and return the new role
    const newRole = await Role.create(args);
    return newRole;
  },

  UpdateRole: async (parent, args, context, info) => {
    if (!context.user) {
      throw new Error("You must be logged in to create a role");
    }
    if (context.user.role !== "Super Admin") {
      throw new Error("You are not authorized to create a role");
    }
    // Validation with Joi
    const { error, value } = Joi.validate(args, updateRole, {
      abortEarly: false,
    });
    if (error)
      throw new UserInputError("Failed to update role", {
        errors: error.details,
      });

    // Check if role with the given ID exists
    const existingRole = await Role.findById(args.id);
    if (!existingRole) throw new UserInputError("Role not found");

    // Check if role with the same name already exists
    if (args.name && args.name !== existingRole.name) {
      const existingRoleName = await Role.findOne({ name: args.name });
      if (existingRoleName)
        throw new UserInputError("Role with the same name already exists");
    }

    // Update and return the role
    Object.assign(existingRole, args);
    const updatedRole = await existingRole.save();
    return updatedRole;
  },

  DisableRole: async (parent, args, context, info) => {
    const { RoleName, OrganizationId } = args;

    console.log(context.user);
    if (context.user.role === "Organization Admin") {
      try {
        const filter = {
          _id: OrganizationId,
          "Roles.Rolename": RoleName,
        };

        const update = {
          $set: {
            "Roles.$.isDisabled": true,
          },
        };

        const organization = await Organization.findOneAndUpdate(
          filter,
          update,
          { new: true }
        );

        if (!organization) {
          throw new Error("Organization not found");
        }

        return organization;
      } catch (error) {
        console.error(error);
        throw new Error("Error disabling role");
      }
    }

    if (context.user.role === "Super Admin") {
      try {
        const filter = {
          _id: OrganizationId,
          "Roles.Rolename": RoleName,
        };

        const update = {
          $set: {
            "Roles.$.isDisabled": true,
          },
        };

        const organization = await Organization.findOneAndUpdate(
          filter,
          update,
          { new: true }
        );

        if (!organization) {
          throw new Error("Organization not found");
        }

        return organization;
      } catch (error) {
        console.error(error);
        throw new Error("Error disabling role");
      }
    }
  },

  EnableRole: async (parent, args, context, info) => {
    const { RoleName, OrganizationId } = args;

    if (context.user.role === "Organization Admin") {
      try {
        const filter = {
          _id: OrganizationId,
          "Roles.Rolename": RoleName,
        };

        const update = {
          $set: {
            "Roles.$.isDisabled": false,
          },
        };

        const organization = await Organization.findOneAndUpdate(
          filter,
          update,
          { new: true }
        );

        if (!organization) {
          throw new Error("Organization not found");
        }

        return organization;
      } catch (error) {
        console.error(error);
        throw new Error("Error enabling role");
      }
    } else if (context.user.role === "Super Admin") {
      try {
        const filter = {
          _id: OrganizationId,
          "Roles.Rolename": RoleName,
        };

        const update = {
          $set: {
            "Roles.$.isDisabled": false,
          },
        };

        const organization = await Organization.findOneAndUpdate(
          filter,
          update,
          { new: true }
        );

        if (!organization) {
          throw new Error("Organization not found");
        }

        return organization;
      } catch (error) {
        console.error(error);
        throw new Error("Error enabling role");
      }
    } else {
      throw new Error("You are not authorized to perform this action");
    }
  },

  ChangeRole: async (parent, args, context, info) => {
    if (!context.user) {
      throw new Error("You must be logged in");
    }
    if (context.user.role === "Organization Admin") {
      const organization = await Organization.findOne({
        OrganizationName: context.user.organization,
      });

      const roleExists = organization.Roles.some(
        (role) => role.Rolename === args.roleName && role.isDisabled === false
      );

      if (!roleExists) {
        throw new Error(`${args.roleName} does not exist or is disabled.`);
      }

      const user = await User.findOne({
        _id: args.Userid,
        Organization: context.user.organization,
      });

      if (!user) {
        throw new Error("User not found");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: args.Userid },
        {
          Role: args.roleName,
        },
        { new: true } // To return the updated user object
      );

      return {
        success: true,
        message: `Role changed successfully. ${user.FirstName} ${user.LastName} is now a ${args.roleName}`,
      };
    }

    if (context.user.role === "Super Admin") {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args.Userid },
        {
          Role: args.roleName,
        },
        { new: true } // To return the updated user object
      );
      return {
        success: true,
        message: `Role changed successfully. ${updatedUser.FirstName} ${updatedUser.LastName} is now a ${args.roleName}`,
      };
    } else {
      return {
        success: false,
        message: "You are not allowed to change the roles",
      };
    }
  },

  AssignRoleToAllUsers: async (parent, args, context, info) => {
    const { roleName } = args;

    if (context.user.role !== "Super Admin") {
      throw new Error("You do not have permission to perform this action");
    }

    const role = await Role.findOne({ name: roleName, isDisabled: false });
    if (!role) {
      throw new Error("The specified role does not exist or is disabled");
    }

    const superAdminRole = await Role.findOne({ name: "Super Admin" });

    const users = await User.updateMany(
      { Role: { $ne: superAdminRole.name, $ne: "Super Admin" } },
      { $set: { Role: role.name } }
    );

    return {
      message: "Role Successfully Updated",
      success: true,
    };
  },

  AssignRoleToOrganizationUsers: async (parent, args, context, info) => {
    console.log(context.user);
    const { roleName, organizationId } = args;

    if (context.user.role !== "Organization Admin") {
      throw new Error("You do not have permission to perform this action");
    }

    const role = await Role.findOne({ name: roleName, isDisabled: false });
    if (!role) {
      throw new Error("The specified role does not exist or is disabled");
    }

    const organization = await Organization.findOne({
      OrganizationName: context.user.organization,
    });
    if (!organization) {
      throw new Error("The specified organization does not exist");
    }

    const enabledRoles = organization.Roles.filter(
      (role) => role.isDisabled === false
    ).map((role) => role.Rolename);

    const users = await User.updateMany(
      {
        Organization: context.user.organization,
        _id: { $ne: context.user.id },
      },
      { $set: { Role: roleName } }
    );

    return {
      message: "Role Successfully Updated",
      success: true,
    };
  },

  GlobalDisable: async (parent, args, context, info) => {
    if (!context.user) {
      return { message: "Please Login First" };
    }
    if (context.user.role != "Super Admin") {
      return { message: "You are not allowed to Disable the Role Globally" };
    }

    const role = await Role.findOneAndUpdate(
      { name: args.Rolename },
      { isDisabled: true },
      { new: true }
    );

    if (!role) {
      throw new Error("The specified role does not exist");
    }

    return {
      message: "Role disabled successfully",
      success: true,
    };
  },

  GlobalEnable: async (parent, args, context, info) => {
    if (!context.user) {
      return { message: "Please Login First" };
    }
    if (context.user.role !== "Super Admin") {
      return { message: "You are not allowed to Enable the Role Globally" };
    }

    const role = await Role.findOneAndUpdate(
      { name: args.Rolename },
      { isDisabled: false },
      { new: true }
    );

    if (!role) {
      throw new Error("The specified role does not exist");
    }

    return {
      message: "Role enabled successfully",
      success: true,
    };
  },

  DisableOrganizationRole: async (parent, args, context, info) => {
    if (!context.user) {
      throw new Error("Please login first");
    }

    console.log(context.user);
    const { roleName } = args;

    const organization = await Organization.findOneAndUpdate(
      {
        OrganizationName: context.user.organization,
        "Roles.Rolename": roleName,
      },
      {
        $set: {
          "Roles.$.isDisabled": true,
        },
      },
      { new: true }
    );

    if (!organization) {
      throw new Error("The specified organization or role does not exist");
    }

    return {
      message: "Role disabled successfully",
      success: true,
    };
  },

  EnableOrganizationRole: async (parent, args, context, info) => {
    if (!context.user) {
      throw new Error("Please login first");
    }

    const { roleName } = args;

    const organization = await Organization.findOneAndUpdate(
      {
        OrganizationName: context.user.organization,
        "Roles.Rolename": roleName,
      },
      {
        $set: {
          "Roles.$.isDisabled": false,
        },
      },
      { new: true }
    );

    if (!organization) {
      throw new Error("The specified organization or role does not exist");
    }

    return {
      message: "Role enabled successfully",
      success: true,
    };
  },

  DeleteRole: async (parent, args, context, info) => {
    if (!context.user) {
      return {
        message: "You need to be logged in to proceed with this action",
      };
    }

    if (context.user.role !== "Super Admin") {
      return { message: "You are not allowed to enable the role globally" };
    }

    try {
      // Delete the role from the database
      const result = await Role.deleteOne({ name: args.roleName });
      if (result.deletedCount === 0) {
        return { message: "Role not found" };
      }
      return { message: "Role deleted successfully" };
    } catch (err) {
      console.error(err);
      return { message: "An error occurred while deleting the role" };
    }
  },
};

module.exports = roleMutationResolvers;
