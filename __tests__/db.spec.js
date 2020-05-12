const db = require('../db.js');
const fs = require('fs');
jest.mock('fs');
describe('db', () => {
  afterEach(() => {
    fs.clearMocks();
  });
  it('can read', async () => {
    const obj = [{ title: 'hi', done: true }];
    fs.setReadFileMock('/xxx', null, JSON.stringify(obj));
    const list = await db.read('/xxx');
    expect(list).toStrictEqual(obj);
  });
  it('can write', async () => {
    let fakeFile = {};
    fs.setWriteFileMock('/yyy', (path, data, callback) => {
      fakeFile = data;
      callback(null);
    });
    const list = [{ title: 'test', done: true }];
    await db.write(list, '/yyy');
    expect(fakeFile).toBe(JSON.stringify(list) + '\n');
  });
});
