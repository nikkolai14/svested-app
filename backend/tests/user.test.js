const path = require('path');
const request = require('supertest')
const server = require(`${path.resolve('./')}/index.js`);

afterAll(() => {
    server.close();
});

describe('User API', () => {
    it('should able to signup', async () => {
        const data = {
            username: 'johndoe@email.com',
            password: 'Password#00'
        };
        const res = await request(server)
            .post('/signup')
            .send(data)
            .set('Accept', 'application/json');

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('token');
    });
})
