const request = require('supertest');
const app = require('../index'); // Adjust the path as necessary

describe('Express App', () => {
  it('should serve static files from public_html', async () => {
    const res = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
    expect(res.text).toContain(''); // Check for specific content in your index.html if needed
  });

  it('should return 404 for non-existing routes', async () => {
    await request(app)
      .get('/non-existing-route')
      .expect(404);
  });
});
