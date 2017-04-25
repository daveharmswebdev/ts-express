import { should, expect } from 'chai';
import * as supertest from 'supertest';
const api = supertest('http://localhost:8080');

describe('/api/login route', () => {
  it('should return a 200 response', done => {
    api.get('/api/login')
      .set('Accept', 'application/json')
      .expect(200, done)
  });

  it('post should return a 200 response', done => {
    api.post('/api/login')
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        username: 'dave',
        password: 'asdf'
      })
      .expect(200, done)
  });
});