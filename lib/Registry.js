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

			new this.schema.user({id:11}).fetch({withRelated: ['userProfile','package','session']}).exec(function(err, user){
				log(err, JSON.stringify(user));
			}.bind(this));

			new this.schema.session({id:1}).fetch({withRelated: ['user']}).exec(function(err, session){
				log(err, JSON.stringify(session));
			}.bind(this));
		}
	});	
}();