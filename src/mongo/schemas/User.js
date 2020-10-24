const mongoose = require('mongoose');



const schema = new mongoose.Schema({
  name: String,
  surname: String,
  fullName: String,
  active: Boolean,
  email: String,
  phone: String,
  sensitiveHashpass: String,
  roles: [String]
});

schema.pre('save', function(next) {
  if (this.name !== undefined && this.surname !== undefined) {
    this.fullName = this.name + " " + this.surname;
  }
  next();
});

const User = mongoose.model('User', schema);

module.exports = User;
