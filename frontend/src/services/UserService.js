import api from '../api';

const signup = (data) => {
    return api.post('/signup', data, {
        headers: {
            'accept': 'application/json'
        }
    });
}

const process = () => {
    return api.post('/process');
}

const fetch = (page) => {
    return api.get(`/fetch?page=${page}`);
}

const userService = {
    signup,
    process,
    fetch
};

export default userService;
