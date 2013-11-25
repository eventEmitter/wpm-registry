!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('ee-bookshelf-schema').BaseModel;



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'package'


		, repositoryType: {
			belongsTo: 'id_repositoryType'
		}

		, packageVersion: {
			hasMany: 'id_package'
		}


		, organization: {
			belongsToMany: {
				  table: 	'organization_package'
				, key: 		'id_package'
				, otherKey: 'id_organization'
			}
		}
	});
}();