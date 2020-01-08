'use strict';

//for 3rd party packages, you simply put mocks in the __mocks__ folder.
//for embedded modules, fs, util - you need to tell jest.

jest.mock('fs');

const reader = require('../lib/reader.js');

describe('Reader Module testing', () => {
  
  describe('callback tests', () => {
    it('proves the test runs', () => {
      expect(true).toBe(true);
    });

    it('when given a bad file, returns an error', (done) => {

      let file = `${__dirname}/../../data/bad.txt`;
      reader.readerWithCallback(file, () => {
        expect(err).toBeDefined();
        done();
      })
    });

    it('when a given real file exists, returns the contents', (done) => {
      let file = `${__dirname}/../../data/file.txt`;
      readerWithCallback(file, () => {
        expect(err).toBeUndefined();
        expect(typeof data).toBe('string');
        done();
      });
    });


  });

  describe('promise tests', () => {
    it('when given a bad file, returns error', () => {
      let file = `${__dirname}/../../data/bad.txt`;
      return reader.readerWithPromise(file)
        .then(data => expect(data).not.toBeDefined())
        .catch(error => expect(error).toBeDefined));
    })
  })

  describe('Async Await', () => {
    
  })
})