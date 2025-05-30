import request from 'supertest';
import app from '../';

describe('POST /mail/games', function () {
  it('should send an email', async function () {
    const data = {
      to: 'test@example.com',
      game: 'Mafia',
      recipientVariables: { 'test@example.com': { name: 'Test', role: 'Mafia' } },
      isTest: true,
    };
    const response = await request(app)
      .post('/mail/games')
      .send(data)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Email sent successfully');
  });

  it('should send an email', async function () {
    const data = {
      to: 'test@example.com',
      game: 'Impostor',
      variables: { name: 'Test', word: 'Sky', email: 'test@example.com', impostor: 'false' },
      isTest: true,
    };
    const response = await request(app)
      .post('/mail/games')
      .send(data)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Email sent successfully');
  });
});
