import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tonyowl-burger-builder.firebaseio.com/'
});

export default instance;
