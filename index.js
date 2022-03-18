import { ApolloServer, gql } from 'apollo-server';
import GET_PRODUCTS from './data.js';

const typeDefs = gql`
	type Query {
		products: [Product]
	}

    type Product {
        id: ID
        title: String
        price: Float
        description: String
        category: String
        image: String
        rating: Rating
    }

    type Rating {
        rate: Float
        count: Int
    }
`;

const resolvers = {
    Query: {
        products: () => {
            return GET_PRODUCTS;
        }
    },
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url: API_URL }) => {
	console.log(`Server is running at ${API_URL}`);
});
