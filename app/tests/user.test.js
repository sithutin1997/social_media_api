const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose')
const User = require('../models/User')
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

// describe('Get /users', ()=> {
//   it('users count', async ()=> {
//    const response = await request(app).get('/api/users');
//    expect(response.body.length).toBe(3)
//   })
// })

describe('Post /users', ()=> {
  it('create user', async ()=> {
    const response = await request(app).post('/api/users').send({
      name: "test_name3",
      email: "test_email",
      username: "test_username",
      password: "test_password"
    });
    expect(response.body.name).toBe("test_name3")
  })
})

describe('Delete /users/:id', ()=> {
  it('Delete user by id', async ()=> {
    const user = await User.create({
      name: "test_name2",
      email: "test_email2",
      username: "test_username2",
      password: "test_password2"
    })
    const response = await request(app).delete(`/api/users/${user.id}`);
    expect(204)
    .then(async ()=> {
      expect(await User.findOne({ _id: user.id})).toBeFalsy()
    })
  })
})