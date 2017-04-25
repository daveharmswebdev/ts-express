import { should, expect } from 'chai';
import * as supertest from 'supertest';
const api = supertest('http://localhost:8080');

describe('/api/logout route', () => {
  it('should return a 200 response', done => {
    api.get('/api/logout')
      .set('Accept', 'application/json')
      .expect(200, done)
  });
});