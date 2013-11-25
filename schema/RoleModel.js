!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('ee-bookshelf-schema').BaseModel;



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'role'


		, user: {
			belongsToMany: {
				  table: 	'user_role'
				, key: 		'id_role'
				, otherKey: 'id_user'
			}
		}
	});
}();