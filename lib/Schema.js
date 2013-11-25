!function(){

	var   Class 		= require('ee-class')
		, EventEmitter	= require('ee-event-emitter')
		, log 			= require('ee-log')
		, orm 			= require('bookshelf')
		, fs 			= require('fs')
		, exec 			= require('bookshelf/plugins/exec')
		, project 		= require('ee-project');





	module.exports = new Class({
		inherits: EventEmitter


		// reference to all models
		, _models: {}


		/**
		 * class constructor
		 */
		, init: function(options) {
			this._config = {
				  client: options.config.type
				, connection: {
					  host 		: options.config.host
					, user 		: options.config.user
					, password 	: options.config.password
					, database 	: options.config.database
					, port 		: options.config.port
				}
			}


			this._initialize(function(){
				this._loadModels(function(err){
					if (err) {
						this.emit('error', err);
						log('failed to load models!', err);
					}
					else {
						this.emit('load');
					}
				}.bind(this));
			}.bind(this));
		}


		/**
		 * the _initialize() method initializes the db and models
		 *
		 * @param <Function> callback
		 */
		, _initialize: function(loaded) {
			this.db = orm.initialize(this._config);
			this.db.plugin(exec);

			this.db.knex.raw('SELECT 1').exec(function(err){
				if (err) {
					this.emit('error', err);
					log('failed to connect to database!', err);
				}
				else loaded();
			}.bind(this));
		}



		/**
		 * the _loadModels() method loads all the db models
		 */
		, _loadModels: function(callback) {
			var   options 	= { db: this.db, schema: this._models }
				, dir 		= project.root+'/lib/schema/';

				
			fs.readdir(dir, function(err, files){
				if (err) callback(err);
				else {
					files.forEach(function(fileName){
						var modelName;

						if(fileName.substr(fileName.length - 3) === '.js'){
							modelName = fileName[0].toLowerCase() + fileName.substr(1, fileName.lastIndexOf('Model.js')-1);

							this._models[modelName] = new (require(dir+fileName))(options);
						}
					}.bind(this));

					// bind models to this
					Object.keys(this._models).forEach(function(modelName){
						this._models[modelName].intializeRelations();
						this[modelName] = this._models[modelName];
					}.bind(this));

					callback();
				}
			}.bind(this));			
		}
	});
}();