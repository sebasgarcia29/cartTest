import axios from 'axios';

const baseURL = 'https://world.openfoodfacts.org';

const clientAPI = axios.create({ baseURL });

export default clientAPI;
