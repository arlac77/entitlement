var vows          = require('vows'),
	assert        = require('assert'),
    Entitlement   = require('../entitlement').Entitlement;

vows.describe('entitlement').addBatch({
    'cmd': {
        topic: Entitlement('ent1',{ 'en' : "simple entitlement" }),
        'id present': function(entitlement) {
			assert.equal(entitlement.id, 'ent1');
        }
	}
}).export(module);

