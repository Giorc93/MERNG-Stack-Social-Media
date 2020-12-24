import { ApolloServer } from "apollo-server";
import gql from "graphql-tag";
import mongoose from "mongoose";

//Import connection data file
import { MONGODB } from "./config";

//Import typeDefs and resolvers
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers/index";

//Creating server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Connect to DB and run server

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //Running server
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
