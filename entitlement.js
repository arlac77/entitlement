
"use strict";

var async    = require("async");

var _entitlements = {};
var _roles = {};
var _accounts = {};

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

var RootAccount = {
	"toString" : function() { return this.id + ': ' + Object.keys(this.roles).join(','); },
	"hasEntitlement" : function(entitlement) { return true; }
};

function Account(id,options)
{
	var rs = {};

	for(var i in options.roles) {
		var e = options.roles[i];
		rs[e] = _roles[e];
		if(!rs[e]) rs[e] = Role(e);
	}

	var defs = {
		id: { value: id, enumerable: true },
	    roles: { value: rs, enumerable: true }};

	return Object.create(RootAccount, defs);
}

exports.registerEntitlements = function(ents)
{
	for(var i in ents) {
		_entitlements[i] = Entitlement(i, ents[i]);
	}
}

exports.registerRoles = function(roles)
{
	for(var i in roles) {
		_roles[i] = Role(i, roles[i]);
	}
}

exports.registerAccounts = function(accounts)
{
	for(var i in accounts) {
		_accounts[i] = Account(i, accounts[i]);
	}
}

exports.accountHasEntitlement = function(account,entitlement)
{
	var a = _accounts[account];
	//console.log("a: " + account + " -> " + a);
	return a && a.hasEntitlement(entitlement) ? true : false;
}

exports.Entitlement   = Entitlement;
exports.Role          = Role;
exports.Account       = Account;
