/* eslint-env mocha */

import request from 'supertest';
import app from '../app.js';

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('post')
    })
})

// describe('Sample Test', () => {
//   it('should test that true === true', () => {
//     expect(true).toBe(true)
//   })
// })
