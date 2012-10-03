
"use strict";

var async    = require("async");

var RootEntitlement = {
	"toString" : function() { return this.id + " : " + this.descriptions['en']; }
};

function Entitlement(id,descriptions)
{
	return Object.create(RootEntitlement,{
		'id' : { value : id },
		'descritions' : { value: descriptions }
	});
}

function Role(id,descriptions)
{
	
}

exports.Entitlement   = Entitlement;
exports.Role          = Role;
