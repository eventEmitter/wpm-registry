!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, project 		= require('ee-project')
		, Schema 		= require('ee-bookshelf-schema')
		, Webservice	= require('ee-webservice')
		, Service 		= require('em-rest-service');




	module.exports = new Class({

		init: function(config) {
			this.config = config;


			this.webservice = new Webservice({http:{
				  interface: Webservice.Webserver.IF_ANY 
				, port: this.config.webserver.port
			}});


			this.schema = new Schema(this.config.database);
			this.schema.on('load', function(){

				var options = {
					  controllers: './controller'
					, controllerOptions: {
						schema: this.schema
					}
				};

				this.service = new Service(options);
				this.service.on('load', function(){
					this.webservice.listen();
				}.bind(this));
			}.bind(this));			
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