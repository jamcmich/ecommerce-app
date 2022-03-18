import axios from "axios";

const GET_PRODUCTS = axios
	.get('https://fakestoreapi.com/products')
	.then((response) => {
		return response.data;
	});

export default GET_PRODUCTS;
