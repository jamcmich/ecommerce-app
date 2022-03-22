import * as api from './data.js';

const resolvers = {
	Query: {
		products: () => {
			return api.GET_PRODUCTS;
		},
		product: (parent, args) => {
			return api.GET_PRODUCT(args.id) ? api.GET_PRODUCT(args.id) : null;
		},
		categories: () => {
			return api.GET_CATEGORIES;
		},
		category: (parent, args) => {
			return api.GET_CATEGORY(args.category)
				? api.GET_CATEGORY(args.category)
				: null;
		},
		carts: () => {
			return api.GET_CARTS;
		},
		// cart: (parent, args) => {
		// 	return GET_CART(args.id) ? GET_CART(args.id) : null;
		// },
	},
	Mutation: {
		addProduct: (parent, args) => {
			return api.ADD_PRODUCT(args);
		},
		updateProduct: (parent, args) => {
			return api.UPDATE_PRODUCT(args);
		},
		deleteProduct: (parent, args) => {
			return api.DELETE_PRODUCT(args.id);
		}
	},
};

export { resolvers };