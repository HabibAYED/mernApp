import axios from 'axios';

const url = "http://localhost:5001/users";

export const fetchtable = () => axios.get(url);