var vows          = require('vows'),
	assert        = require('assert'),
    Entitlement   = require('../entitlement').Entitlement;

vows.describe('entitlement').addBatch({
    'declare single with description': {
        topic: Entitlement( "ent1", { "description" : { "en" : "simple entitlement" }}),
        'id present': function(entitlement) {
			assert.equal(entitlement.id, 'ent1');
        },
        'toString': function(entitlement) {
			assert.equal(entitlement.toString(), 'ent1: simple entitlement');
        }
	},
    'declare single without description': {
        topic: Entitlement( "ent1" ),
        'id present': function(entitlement) {
			assert.equal(entitlement.id, 'ent1');
        },
        'toString': function(entitlement) {
			assert.equal(entitlement.toString(), 'ent1');
        }
	}
}).export(module);

