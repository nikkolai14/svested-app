import api from '../api';

const signup = (data) => {
    return api.post('/signup', data, {
        headers: {
            'accept': 'application/json'
        }
    });
}

const verify = () => {
    return api.post('/verify');
}

const process = () => {
    return api.post('/process');
}

const fetch = () => {
    return api.get('/fetch');
}

const userService = {
    signup,
    process,
    fetch,
    verify
};

export default userService;
