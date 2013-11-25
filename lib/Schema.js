!function(){

	var   Class 		= require('ee-class')
		, EventEmitter	= require('ee-event-emitter')
		, log 			= require('ee-log')
		, orm 			= require('bookshelf')
		, exec 			= require('bookshelf/plugins/exec');


	
	var   CollectionModel				= require('./schema/CollectionModel')
		, CollectionPermissionModel		= require('./schema/CollectionPermissionModel')
		, FileModel						= require('./schema/FileModel')
		, OrganizationModel				= require('./schema/OrganizationModel')
		, PackageModel					= require('./schema/PackageModel')
		, PackageVersionModel			= require('./schema/PackageVersionModel')
		, ReplicationModel				= require('./schema/ReplicationModel')
		, RoleModel						= require('./schema/RoleModel')
		, SessionModel					= require('./schema/SessionModel')
		, StorageModel					= require('./schema/StorageModel')
		, UserModel						= require('./schema/UserModel')
		, UserLoginEmailModel			= require('./schema/UserLoginEmailModel')
		, UserProfileModel				= require('./schema/UserProfileModel')
		, UserPasswordResetTokenModel	= require('./schema/UserPasswordResetTokenModel');




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
				this._loadModels();
				this.emit('load');
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
					log('faield to connect to database!', err);
				}
				else loaded();
			}.bind(this));
		}



		/**
		 * the _loadModels() method loads all the db models
		 */
		, _loadModels: function() {
			this._models.Organization 			= new OrganizationModel({ db: this.db, schema: this._models });
			this._models.Storage 				= new StorageModel({ db: this.db, schema: this._models });
			this._models.Role 					= new RoleModel({ db: this.db, schema: this._models });		
			this._models.Collection 			= new CollectionModel({ db: this.db, schema: this._models });
			this._models.CollectionPermission	= new CollectionPermissionModel({ db: this.db, schema: this._models });
			this._models.File 					= new FileModel({ db: this.db, schema: this._models });	
			this._models.Package 				= new PackageModel({ db: this.db, schema: this._models });
			this._models.PackageVersion 		= new PackageVersionModel({ db: this.db, schema: this._models });
			this._models.Replication 			= new ReplicationModel({ db: this.db, schema: this._models });
			this._models.Session 				= new SessionModel({ db: this.db, schema: this._models });
			this._models.User 					= new UserModel({ db: this.db, schema: this._models });
			this._models.UserLoginEmail 		= new UserLoginEmailModel({ db: this.db, schema: this._models });
			this._models.UserPasswordResetToken = new UserPasswordResetTokenModel({ db: this.db, schema: this._models });
			this._models.UserProfile 			= new UserProfileModel({ db: this.db, schema: this._models });

			// bind models to this
			Object.keys(this._models).forEach(function(modelName){
				this._models[modelName].intializeRelations();
				this[modelName] = this._models[modelName];
			}.bind(this));
		}
	});
}();