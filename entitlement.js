
"use strict";

var async    = require("async");

var RootEntitlement = {
	"toString" : function() { return this.id + ": " + this.description['en']; }
};

function Entitlement(id,options)
{
	return Object.create(RootEntitlement,{
		'id' : { value : id },
		'description' : { value: options.description }
	});
}

function Role(id,descriptions)
{
	
}

exports.Entitlement   = Entitlement;
exports.Role          = Role;
