import  jwt  from 'jsonwebtoken';
require("dotenv").config();
const {
  Role,
} = require(".././models");

export function generateToken(user) {
  return new Promise((resolve, reject) => {
    console.log(user)
    if (user.Role === "Super Admin") {
      // If user is a Super Admin, return token without checking role
      const data = {
        id: user.id || user._id,
        name: `${user.FirstName} ${user.LastName}`,
        email: user.Email,
        organization: user.Organization,
        role: user.Role,
      };
      const expiresIn = process.env.JWT_EXPIRATION_IN;
      const secret = process.env.JWT_SECRET;
      resolve(jwt.sign(data, secret, { expiresIn }));
    } else {
      // For other users, find role and add it to data object
      Role.findOne({ name: user.Role })
        .then((role) => {
          const data = {
            id: user.id || user._id,
            name: `${user.FirstName} ${user.LastName}`,
            email: user.Email,
            organization: user.Organization,
            role: role.name,
          };
          const expiresIn = process.env.JWT_EXPIRATION_IN;
          const secret = process.env.JWT_SECRET;
          resolve(jwt.sign(data, secret, { expiresIn }));
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    }
  });
}
