var vows          = require('vows'),
	assert        = require('assert'),
    Entitlement   = require('../entitlement').Entitlement,
    Role          = require('../entitlement').Role,
    Account       = require('../entitlement').Account;

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
	},
    'declare role': {
        topic: Role('role1',['ent1']),
        'id present': function(entitlement) {
			assert.equal(entitlement.id, 'role1');
        },
        'toString': function(entitlement) {
			assert.equal(entitlement.toString(), 'role1: ent1');
        }
	},
    'declare account': {
        topic: Account('acc1',['role1']),
        'id present': function(account) {
			assert.equal(account.id, 'acc1');
        },
        'toString': function(entitlement) {
			assert.equal(entitlement.toString(), 'acc1: role1');
        }
	}
}).export(module);

