
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

function Entitlements(ents)
{
	for(var i in ents) {
		_entitlements[i] = Entitlement(i, ents[i]);
	}
}

function Role(id,descriptions)
{
	
}

function Roles(roles)
{
	
}

exports.Entitlement   = Entitlement;
exports.Entitlements  = Entitlements;
exports.Role          = Role;
exports.Roles         = Roles;
