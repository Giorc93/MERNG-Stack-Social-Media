import { model, Schema } from "mongoose";

//Handle 'require' fields using the Graphql layer instead

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
