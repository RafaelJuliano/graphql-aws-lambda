"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const schema_1 = require("@graphql-tools/schema");
const server_1 = require("@apollo/server");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const aws_lambda_1 = require("@as-integrations/aws-lambda");
const createApolloServer = () => {
    const typeDefs = (0, graphql_tag_1.default) `
    type Query {
      helloWorld: String!
    }
  `;
    const resolvers = {
        Query: {
            helloWorld() {
                return 'Hello World!';
            },
        },
    };
    const schema = (0, schema_1.makeExecutableSchema)({
        typeDefs,
        resolvers,
    });
    return new server_1.ApolloServer({ schema });
};
const server = createApolloServer();
const handler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server, aws_lambda_1.handlers.createAPIGatewayProxyEventV2RequestHandler(), {
    context: async (args) => {
        const { event } = args;
        return {
            headers: event.headers,
        };
    },
});
exports.main = handler;
//# sourceMappingURL=handler.js.map