// models/User.js
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.comparePassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);