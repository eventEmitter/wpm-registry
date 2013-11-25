!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, project 		= require('ee-project');


	var   Schema 		= require('./Schema');



	module.exports = new Class({

		init: function(config) {
			this.config = config;

			this.schema = new Schema({ config: this.config.database });
			this.schema.on('load', this.listen.bind(this));
		}


		, loadRESTfulInterfaces: function() {

		}


		, listen: function() {
			log('db ready ...');

			new this.schema.UserProfile({user:1}).save().exec(function(err){
				log(err);
			}.bind(this));
		}
	});	
}();