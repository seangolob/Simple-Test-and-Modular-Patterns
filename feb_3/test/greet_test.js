'use strict';

var hello = require('../lib/greeting');
var expect = require('chai').expect;

describe('greeting', function() {
  it('should say hello sean', function() {
    expect(hello.greet('sean')).to.eql('hello sean');
  });
});

