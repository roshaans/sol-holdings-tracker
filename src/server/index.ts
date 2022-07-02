// index.ts
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@generated/type-graphql";
import * as tq from "type-graphql";
import { accountTracker } from "../utils/prismaClient";

const app = async () => {
  const schema = await tq.buildSchema({ resolvers });

  const context = {
    prisma: accountTracker,
  };

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log("🚀 Server ready at: http://localhost:4000")
  );
};

app();
