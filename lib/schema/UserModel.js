!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, BaseModel 	= require('../BaseModel');



	module.exports = new Class({ 
		inherits: BaseModel

		, name: 'user'



		, userProfile: {
			hasOne: 'id_user'
		}

		, userPasswordResetToken: {
			hasOne: 'id_user'
		}

		, userLoginEmail: {
			hasOne: 'id_user'
		}

		, session: {
			hasMany: 'id_user'
		}


		, package: {
			belongsToMany: {
				  table: 	'user_package'
				, key: 		'id_user'
				, otherKey: 'id_package'
			}
		}

		, collectionPermission: {
			belongsToMany: {
				  table: 	'user_collectionPermission'
				, key: 		'id_user'
				, otherKey: 'id_collectionPermission'
			}
		}

		, organization: {
			belongsToMany: {
				  table: 	'user_organization'
				, key: 		'id_user'
				, otherKey: 'id_organization'
			}
		}


		, role: {
			belongsToMany: {
				  table: 	'user_role'
				, key: 		'id_user'
				, otherKey: 'id_role'
			}
		}
	});
}();