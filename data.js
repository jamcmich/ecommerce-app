import axios from 'axios';

/**
 * GET all products
 */
const GET_PRODUCTS = axios
	.get(`https://fakestoreapi.com/products`)
	.then((response) => response.data);

/**
 * GET a product with the specified id
 *
 * @param {*} id
 * @returns a product
 */
const GET_PRODUCT = (id) =>
	axios
		.get(`https://fakestoreapi.com/products/${id}`)
		.then((response) => response.data);

/**
 *	GET a list of all categories
 */
const GET_CATEGORIES = axios
	.get(`https://fakestoreapi.com/products/categories`)
	.then((response) => response.data);

/**
 * GET products with the specified category
 *
 * @param {*} category
 * @returns a list of products
 */
const GET_CATEGORY = (category) =>
	axios
		.get(`https://fakestoreapi.com/products/category/${category}`)
		.then((response) => response.data);

/**
 * GET all users' shopping carts
 */
const GET_CARTS = axios
	.get(`https://fakestoreapi.com/carts`)
	.then((response) => response.data);

/**
 * GET a shopping cart with the specified user id
 *
 * @param {*} id
 * @returns a user's shopping cart
 */
const GET_CART = (id) =>
	axios
		.get(`https://fakestoreapi.com/carts?userId=${id}`)
		.then((response) => response.data);

const ADD_PRODUCTS = (product) =>
	axios
		.post(`https://fakestoreapi.com/products`, product)
		.then((response) => console.log(response.data));

export {
	GET_PRODUCTS,
	GET_PRODUCT,
	GET_CATEGORIES,
	GET_CATEGORY,
	GET_CARTS,
	GET_CART,
	ADD_PRODUCTS
};
