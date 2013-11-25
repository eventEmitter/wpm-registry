!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('../BaseModel');



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'organization'


		, user: {
			belongsToMany: {
				  table: 	'user_organization'
				, key: 		'id_organization'
				, otherKey: 'id_user'
			}
		}

		, package: {
			belongsToMany: {
				  table: 	'organization_package'
				, key: 		'id_organization'
				, otherKey: 'id_package'
			}
		}
	});
}();