import {GraphQLServer} from "graphql-yoga";
import {resolvers} from './resolvers';

const server = new GraphQLServer( {
    typeDefs:'./src/schema.graphql',
    resolvers
});

server.start( () => console.log("serveur started on http://localhost:4000"));

