const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let availableRoles = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} is not a valid role",
};

let UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    default: "USER_ROLE",
    enum: availableRoles,
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

// UserSchema.method.toJSON = function () {
//   let user = this;
//   let userObject = user.toObject();
//   delete userObject.password;
//   return userObject;
// };

UserSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });
module.exports = mongoose.model("User", UserSchema);
