
"use strict";

var async    = require("async");


var RootEntitlement = {
	"toString" : function() { return this.description ? this.id + ": " + this.description['en'] : this.id; }
};

function Entitlement(id,options)
{
	var defs = { id: {value: id, enumerable: true }};
	var key;

	for(key in options) {
		if(options.hasOwnProperty(key)) {
			defs[key] = {value: options[key], enumerable: true };
		}
	}

	return Object.create(RootEntitlement, defs);
}

var _entitlements = {};

function registerEntitlements(ents)
{
	for(var i in ents) {
		_entitlements[i] = Entitlement(i, ents[i]);
	}
}

function getEntitlement(id) {
	return _entitlements[id];
}

var RootRole = {
	"toString" : function() { return this.id + ': ' + Object.keys(this.rights).join(','); },
	"hasEntitlement" : function(ent) { return this.rights[ent]; }
};

function Role(id,rights)
{
	var rs = {};

	for(var i in rights) {
		var e = rights[i];
		rs[e] = _entitlements[e];
		if(!rs[e]) rs[e] = Entitlement(e);
	}

	var defs = {
		id: { value: id, enumerable: true },
	    rights: { value: rs, enumerable: true }};

	return Object.create(RootRole, defs);
}

exports.Entitlement   = Entitlement;
exports.registerEntitlements  = registerEntitlements;
exports.getEntitlement  = getEntitlement;
exports.Role          = Role;
