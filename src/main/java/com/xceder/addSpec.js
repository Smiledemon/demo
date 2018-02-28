import {expect} from 'chai';

const jsdom = require('mocha-jsdom');

jsdom({skipWindowCheck: true});

function add(x, y) {
    return x + y + 1;
};

describe('plus test', () =>
{
    it('1 + 1 = 1', function() {
        expect(add(1, 1)).to.be.equal(3);
    });
});

