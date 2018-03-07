const assert = require('assert');
const {canCast} = require('../app/magic-the-gathering.js');

describe('Magic the Gathering', function() {
    describe('#canCast()', function() {
        it('can cast with one black mana and one black mana cost', function() {
            assert.equal(canCast("B", "B"), true);
        });
        it('cannot cast with one black mana and three black mana cost', function() {
            assert.equal(canCast("B", "BB", "BB"), false);
        });
        it('can cast spell with enough coloured mana for colourless spell', function() {
            assert.equal(canCast("RR", "2"), true);
        });
        it('cannot cast with insufficient colourless mana', function() {
            assert.equal(canCast("1", "2"), false);
        });
        it('should not matter what the order of the spells are', function() {
            assert.equal(canCast("BRR", "1", "RR"), true);
        });

        it('can cast "BBRR","BR"', function() {
            assert.equal(canCast("BBRR","BR"), true);
        });
        it('can cast "BBRR","BR","BR"', function() {
            assert.equal(canCast("BBRR","BR","BR"), true);
        });
        it('can cast "4R","3R"', function() {
            assert.equal(canCast("4R","3R"), true);
        });
        it('cannot cast "2", "R"', function() {
            assert.equal(canCast("2", "R"), false);
        });
        it('can cast "RR", "2"', function() {
            assert.equal(canCast("RR", "2"), true);
        });

        it('should work with two digits colourless mana', function() {
            assert.equal(canCast("20RUUUGGGBBBBBBW", "26RUUUGGBWWW"), false);
        });
    });
});