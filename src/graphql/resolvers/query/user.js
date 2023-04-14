import { User ,Organization} from "../../../models";
const  userQueryResolvers = {
  Users: async (parent, args, context, info) => {
    // Check if the authenticated user is an organization admin
    if (context.user.role === 'Organization Admin') {
      // Retrieve the organization of the authenticated user
    const organization = await Organization.findOne({ OrganizationName: context.user.organization });
    console.log(organization)
    // Retrieve the list of users for the organization and populate their roles
    const users = await User.find({ Organization: organization.OrganizationName })
  
    // Return the list of users for the organization with role names
   
    return users;
    }

    if(context.user.role==="Super Admin"){

      const users= await User.find({})
      return users;

    }
  
    
   
  },
  
  
  User: async (parent, args, context, info) => {
    // Ensure that the authenticated user is an organization admin
    if (context.user.role !== 'Organization Admin') {
      throw new Error('Unauthorized');
    }
  
    // Fetch the organization of the authenticated user
    const organization = await Organization.findOne({ 
      OrganizationName: context.user.organization 
    });
  
    // Fetch the user by ID, ensuring that the user belongs to the authenticated user's organization
    const user = await User.findOne({ 
      _id: args.id,
      Organization: organization.OrganizationName 
    });
  
    // If the user isn't found, throw an error
    if (!user) {
      throw new Error('User not found');
    }
  
    // Return the user
    return user;
  }
  
  }
  
  module.exports = userQueryResolvers;