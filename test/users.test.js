const supertest = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
  return supertest(app).get('/users').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('email', 'jobsontenorio@gmail.com');
    expect(res.body[0]).toHaveProperty('password');
  });
});
