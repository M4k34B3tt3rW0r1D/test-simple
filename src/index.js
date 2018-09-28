"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var resolvers_1 = require("./resolvers");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers_1.resolvers
});
server.start(function () { return console.log("serveur started on http://localhost:4000"); });
