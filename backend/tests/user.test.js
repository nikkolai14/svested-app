const path = require('path');
const request = require('supertest')
const server = require(`${path.resolve('./')}/index.js`);

const signupData = {
    username: 'johndoe@email.com',
    password: 'Password#00'
};
let jwtToken = null;

afterAll(() => {
    server.close();
});

describe('User API', () => {
    it('should able to signup', async () => {
        const res = await request(server)
            .post('/signup')
            .send(signupData)
            .set('Accept', 'application/json');

        jwtToken = res.body.token; 
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('token');
    });

    it('should not able to signup with duplicate email', async () => {
        const res = await request(server)
            .post('/signup')
            .send(signupData)
            .set('Accept', 'application/json');

        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('errors');
    });

    it('should able to process user data', async () => {
        const res = await request(server)
            .post('/process')
            .set('Authorization', `Bearer ${jwtToken}`);

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('state', true);
    });

    it('should able to fetch all user datas', async () => {
        const res = await request(server)
            .get('/fetch')
            .set('Authorization', `Bearer ${jwtToken}`);

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('datas');
    });
})
