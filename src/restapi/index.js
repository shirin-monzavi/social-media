import axios from "axios";

export async function read() {
    try {
        const endpoint = 'https://jsonplaceholder.typicode.com/post';
        const response = await axios.get(endpoint);

        return {
            success: false,
            message: response.data
        }
    } catch (error) {

        const status = error.response.status;
        let message = ''
        switch (status) {
            case 404:
                message = 'Not Found';
                break;
            case 401:
                message = 'Unauthorized';
                break;
            default:
                message = 'Cannot connect';
                break;
        }
        return {
            success: false,
            message: message
        }
    }

}