import axiosInstance from '../services/axiosConfig';
const fetchData = async () => {
    try {
        // Replace '/api/v1/data' with your actual endpoint
        const response = await axiosInstance.get('/api/v1/data');
        console.log('API Data:', response.data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};
export default fetchData;
