import { ApolloServer, gql } from 'apollo-server';
import {
	GET_PRODUCTS,
	GET_PRODUCT,
	GET_CATEGORIES,
	GET_CATEGORY,
	GET_CARTS,
	GET_CART,
	ADD_PRODUCTS,
} from './data.js';

const typeDefs = gql`
    # Types
	type Query {
		products: [Product!]!
		product(id: ID!): Product!
		categories: [String!]!
		category(category: String!): [Product!]!
		carts: [Cart!]!
		# cart:(id: ID!): [Products!]!
	}

    type Mutation {
        addProduct(input: AddProduct!): Product
    }

	type Product {
		id: ID!
		title: String!
		price: Float!
		description: String!
		category: String!
		image: String!
		rating: Rating!
	}

	type Rating {
		rate: Float!
		count: Int!
	}

	type Cart {
		id: ID!
		userId: ID!
		date: String!
		products: [CartProduct!]!
	}

	type CartProduct {
		productId: ID!
		quantity: Int!
	}

    # Inputs
    input AddProduct {
        title: String!
        price: Float!
        description: String!
        image: String!
        category: String!
    }
`;

const resolvers = {
	Query: {
		products: () => {
			return GET_PRODUCTS;
		},
		product: (parent, args) => {
			return GET_PRODUCT(args.id) ? GET_PRODUCT(args.id) : null;
		},
		categories: () => {
			return GET_CATEGORIES;
		},
		category: (parent, args) => {
			return GET_CATEGORY(args.category)
				? GET_CATEGORY(args.category)
				: null;
		},
		carts: () => {
			return GET_CARTS;
		},
		// cart: (parent, args) => {
		// 	return GET_CART(args.id) ? GET_CART(args.id) : null;
		// },
	},
	Mutation: {
		addProduct: (parent, args) => {
            return ADD_PRODUCTS(args);
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
