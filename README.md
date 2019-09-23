[![npm](https://img.shields.io/npm/v/entitlement.svg)](https://www.npmjs.com/package/entitlement)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/entitlement.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/entitlement)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://secure.travis-ci.org/arlac77/entitlement.png)](http://travis-ci.org/arlac77/entitlement)
[![install size](https://packagephobia.now.sh/badge?p=entitlement/@0.1.1)](https://packagephobia.now.sh/result?p=entitlement@0.1.1)
[![codecov.io](http://codecov.io/github/arlac77/entitlement/coverage.svg?branch=master)](http://codecov.io/github/arlac77/entitlement?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/entitlement/badge.svg)](https://snyk.io/test/github/arlac77/entitlement)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/entitlement.svg?style=flat-square)](https://github.com/arlac77/entitlement/issues)
[![Dependency Status](https://david-dm.org/arlac77/entitlement.svg)](https://david-dm.org/arlac77/entitlement)
[![devDependency Status](https://david-dm.org/arlac77/entitlement/dev-status.svg)](https://david-dm.org/arlac77/entitlement#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/entitlement.svg?branch=master)](http://inch-ci.org/github/arlac77/entitlement)
[![downloads](http://img.shields.io/npm/dm/entitlement.svg?style=flat-square)](https://npmjs.org/package/entitlement)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
entitlement(1) -- abstractions around roles rights and entitlements
==============================




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
