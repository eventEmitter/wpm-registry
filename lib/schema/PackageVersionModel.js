!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('../BaseModel');



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'packageVersion'


		, package: {
			belongsTo: 'id_package'
		}

		, file: {
			belongsTo: 'id_file'
		}
	});
}();