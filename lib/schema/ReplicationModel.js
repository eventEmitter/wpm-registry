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
				  tableName: 'replication'
				, user: function(){
					return this.hasOne(schema.User);
				}
			});
		}


		/**
		 * the intializeRelations() method creates the relations on the table
		 */
		, intializeRelations: function(){
			//this.model.hasOne(this.schema.User, 'id_user');
		}
	});
}();