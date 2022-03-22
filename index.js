import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './schema/resolvers.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url: API_URL }) => {
	console.log(`Server is running at ${API_URL}`);
});
