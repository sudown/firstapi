const supertest = require('supertest');
const app = require('../src/app');

test('Deve exibir um estudante', () => {
  return supertest(app).get('/students/1').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20192EWBJ0329');
    expect(res.body.nome).toBe('Adryel do Nascimento Torres Silva');
    expect(res.body.email).toBe('ants@discente.ifpe.edu.br');
    expect(res.body.birth_date).toBe('13/04/2000');
  });
});

test('Deve listar todos os estudantes', () => {
  return supertest(app).get('/students').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(20);
  });
});

test('Deve apagar um estudante', () => {
  return supertest(app).delete('/students/1').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20192EWBJ0329');
    expect(res.body.nome).toBe('Adryel do Nascimento Torres Silva');
    expect(res.body.email).toBe('ants@discente.ifpe.edu.br');
    expect(res.body.id).toBe(1);
  });
});

test('Deve alterar um estudante', () => {
  return supertest(app).put('/students/1')
    .send({
      registration: '20192EWBJ0001',
      email: 'dhyel@discente.ifpe.edu.br',
      nome: 'Dhyel',
    }).then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.registration).toBe('20192EWBJ0001');
    });
});

test('Deve apagar um estudante', () => {
  return supertest(app).delete('/students/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20192EWBJ0191');
    // expect(res.body.name).toBe('Alysson Pereira Assunção');
    expect(res.body.email).toBe('apa1@discente.ifpe.edu.br');
    expect(res.body.birth_date).toBe('13/10/1993');
  });
});

test('Deve apagar outro estudante', () => {
  return supertest(app).delete('/students/3').then((res) => {
    expect(res.status).toBe(200);
  });
});

test('Deve listar um aluno com os dados alterados', () => {
  return supertest(app).get('/students/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20192EWBJ0001');
  });
});
