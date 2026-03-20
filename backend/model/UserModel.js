const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {UserSchema} = require('../schemas/UserSchema');
const UserModel = mongoose.model("User", UserSchema);
module.exports = {UserModel};