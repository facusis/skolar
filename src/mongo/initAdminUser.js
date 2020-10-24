const passwordHash = require('password-hash');
const {adminEmail, adminPassword} = require("../config");
const constants = require('../constants');
const initAdminUser = (User) => {
  User.count()
    .then((count) => {
      if (count === 0) {
        console.log('Going to create a first admin user')
        const admin = new User({ 
          name: 'Admin', 
          email: adminEmail, 
          sensitiveHashpass: passwordHash.generate(adminPassword),
          roles: [constants.userRoles.ROLE_ADMIN]
        });
        admin.save();
      }
    })
}

module.exports = {
  initAdminUser,
}
