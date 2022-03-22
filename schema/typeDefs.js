import { gql } from 'apollo-server';

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
		addProduct(addProductInput: AddProduct!): Product
		updateProduct(updateProductInput: UpdateProduct!): Product
		deleteProduct(id: ID!): Product
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

	input UpdateProduct {
		title: String!
		price: Float!
		description: String!
		image: String!
		category: String!
	}
`;

export { typeDefs };
