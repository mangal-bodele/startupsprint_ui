
import axios from 'axios';


export const getVerifiedCustomers = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/a1/application/`);
    return response.data;
};
