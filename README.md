entitlement(1) -- abstractions around roles rights and entitlements
==============================

[![Build Status](https://secure.travis-ci.org/arlac77/entitlement.png)](http://travis-ci.org/arlac77/entitlement)


	entitlement       = require('entitlement');

	entitlement.registerRoles({
		"view" : ['types.read','values.read'],
		"edit" : ['types.read','values.read','types.write','values.write'],
		"admin" : ['types.read','values.read']
	});

	entitlement.registerAccounts({
		"someone@somewhere.com" : ['view'],
		"mike@somewhere.com" : ['admin']
	});

	entitlement.accountHasEntitlement('mike@somewhere.com','types.read') // True
	entitlement.accountHasEntitlement('someone@somewhere.com','types.write') // False


## Legal Stuff

"entitlement" is owned by Markus Felten.  All
rights not explicitly granted in the MIT license are reserved. See the
included LICENSE file for more details.

"Node.js" and "node" are trademarks owned by Joyent, Inc.
