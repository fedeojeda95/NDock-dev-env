const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const mocha = require('mocha');

mocha.before(function () {
  chai.use(sinonChai);
});

mocha.beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
});

mocha.afterEach(function () {
  this.sandbox.restore();
});