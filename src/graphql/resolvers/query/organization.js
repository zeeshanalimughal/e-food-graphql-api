import { Organization, User } from "../../../models";
import Joi from "joi";
import {
  objectId,
} from "../../schemas";
const organizationQueryResolvers = {
  Organizations: async (parent, args, context, info) => {
    if (context.user.role === "Super Admin") {
      const org = await Organization.find({}).lean().exec();
      const allOrganizations = [];

      for(let i = 0;i<org.length;i++) {
        
        const user = await User.findOne({
          Organization: org[i].OrganizationName,
          Role: "Organization Admin",
        }).lean().exec();
  
        allOrganizations.push({ org: org[i], user });
      }

      console.log(allOrganizations)
      return JSON.parse(JSON.stringify(allOrganizations))
    }

    if (context.user.role === "Organization Admin") {
      const organization = await Organization.find({
        OrganizationName: context.user.organization,
      });

      const users = await User.find({
        Organization: context.user.organization,
        Role: "Organization Admin",
      });

      const allOrganizations = organization.map((o) => ({
        org: o,
        users: users,
      }));

      return allOrganizations;
    } else {
      throw new Error("Unauthorized to see all organizations");
    }
  },

  Organization: async (parent, args, context, info) => {
    if (context.user.role !== "Super Admin") {
      throw new Error("Unauthorized to get the user");
    }
    await Joi.validate(args, objectId);
    return await Organization.findById(args.id);
  },
};

module.exports = organizationQueryResolvers;
