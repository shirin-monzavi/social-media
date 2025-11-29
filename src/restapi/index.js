import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 3000,
});

export async function read() {
    try {
        const endpoint = 'posts';
        const response = await axiosInstance.get(endpoint);
        return {
            success: true,
            message: response.data
        }
    } catch (error) {

        return writeError(error);
    }
}

export async function add(data) {
    try {
        const endpoint = 'posts';
        await axiosInstance.post(endpoint, data);

        return {
            success: true
        }

    } catch (error) {
        return writeError(error);
    }
}

export async function remove(id) {
    try {
        const endpoint = 'posts/' + id;
        await axiosInstance.delete(endpoint);
        return {
            success: true
        }

    } catch (error) {
        return writeError(error);
    }
}

export async function update(data) {
    try {
        await axiosInstance.put('/posts/1', data);
        return {
            success: true
        }
    } catch (error) {
        return writeError(error);
    }
}

function writeError(error) {
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