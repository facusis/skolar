const mongoose = require('mongoose');
require('./connection');
const User = require('./schemas/User');
const Course = require('./schemas/Course');
const {initAdminUser} = require('./initAdminUser');


initAdminUser(User);

module.exports = {
  User,
  Course,
}
