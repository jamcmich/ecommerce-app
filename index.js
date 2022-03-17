import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "Hello, world!";
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url: API_URL }) => {
	console.log(`Server is running at ${API_URL}`);
});
