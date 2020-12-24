import postResolvers from "./posts";
import usersResolvers from "./users";

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
};
