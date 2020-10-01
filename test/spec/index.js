'use strict';

var expect = require('chai').expect;

describe('start-with: ', function () {

  var endWith = require('../../');

  it('endWith() => false', function () {
    expect(endWith()).to.equal(false);
  });

  it('endWith(\'\') => false', function () {
    expect(endWith('')).to.equal(false);
  });

  it('endWith(\'\', null) => false', function () {
    expect(endWith('', null)).to.equal(false);
  });

  it('endWith(\'\', \'\') => true', function () {
    expect(endWith('', '')).to.equal(true);
  });

  it('endWith(\'abcde\', \'\') => true', function () {
    expect(endWith('abcde', '')).to.equal(true);
  });

  it('endWith(\'abcde\', \'e\') => true', function () {
    expect(endWith('abcde', 'e')).to.equal(true);
  });

  it('endWith(\'abcde\', \'de\') => true', function () {
    expect(endWith('abcde', 'de')).to.equal(true);
  });

  it('endWith(\'abcde\', \'b\') => false', function () {
    expect(endWith('abcde', 'b')).to.equal(false);
  });

  it('endWith(\'abcde\', \'bc\') => false', function () {
    expect(endWith('abcde', 'bc')).to.equal(false);
  });

  it('endWith(\'abcde\', \'bc\', 3) => false', function () {
    expect(endWith('abcde', 'bc', 3)).to.equal(true);
  });

  it('endWith(\'abcde\', \'bc\', 2) => false', function () {
    expect(endWith('abcde', 'bc', 2)).to.equal(false);
  });

  it('endWith(\'abcde\', \'bc\', 5) => false', function () {
    expect(endWith('abcde', 'bc', 5)).to.equal(false);
  });
});
