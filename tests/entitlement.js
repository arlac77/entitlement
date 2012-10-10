var vows          = require('vows'),
	assert        = require('assert'),
    Entitlement   = require('../entitlement').Entitlement,
    Role          = require('../entitlement').Role,
    Account       = require('../entitlement').Account,
    accountHasEntitlement	= require('../entitlement').accountHasEntitlement,
    registerAccounts		= require('../entitlement').registerAccounts;

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
        topic: Account('acc1',{roles:['role1','role2']}),
        'id present': function(account) {
			assert.equal(account.id, 'acc1');
        },
        'toString': function(entitlement) {
			assert.equal(entitlement.toString(), 'acc1: role1,role2');
        }
	},
    'entitlement of unknown account': {
        topic: accountHasEntitlement("someone","somethine"),
        'entitlement not present': function(flag) {
			assert.isFalse(flag);
        }
	},
    'entitlement of known account': {
        topic: function() {
			registerAccounts({'acc1' :{roles:['role1','role2']}})
			return accountHasEntitlement("acc1","role1")
		},
        'entitlement is present': function(flag) {
			assert.isTrue(flag);
        }
	}
}).export(module);

