!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log');



	module.exports = new Class({

		/**
		 * class contructor
		 *
		 * @param <Object> options
		 */
		init: function(options) {
			this.db 	= options.db;
			this.schema = options.schema;

			this.initialize();

			this.model.intializeRelations = this.intializeRelations.bind(this);

			return this.model;
		}


		/**
		 * the initialize() method creates the model
		 */
		, initialize: function(){
			var schema = this.schema;
			
			this.model = this.db.Model.extend({
				  tableName: 'user'
				, collectionPermission: function(){
					return this.hasMany(schema.CollectionPermission);
				}
				, organization: function(){
					return this.hasMany(schema.Organization);
				}
				, package: function(){
					return this.hasMany(schema.Package);
				}
				, role: function(){
					return this.hasMany(schema.Role);
				}
			});
		}


		/**
		 * the intializeRelations() method creates the relations on the table
		 */
		, intializeRelations: function(){

		}
	});
}();