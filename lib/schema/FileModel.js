!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('../BaseModel');



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'file'

		, storage: {
			belongsTo: 'id_storage'
		}

		, packageVersion: {
			hasOne: 'id_file'
		}
	});
}();