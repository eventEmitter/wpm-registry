	!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('ee-bookshelf-schema').BaseModel;



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'user_package'
	});
}();