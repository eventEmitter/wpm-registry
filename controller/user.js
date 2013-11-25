!function(){

	var   Class 		= require('ee-class');

	module.exports = new Class({

		urls: [ '/user' ]

		// handles the get request on the collection
		, get: function(request, response, next) {
			log( request.resource ) // the id of the resource
			log( request.mapping ) // a tree of colelctions which
								   // describe the mapping this resource resides on

			if (request.mapping){
				// the url called was /user/:id/comment/:id 
				// this could be another mapping if there are multiple mappings
				// for the comments collection / resource
				response.render( 200, [] );
			}
			else {
				// the resource was called on the root /comment/:id
				response.render( 200, [] );
			}

			// if this were a resource controller there would be a «resource»
			// property on the request. it would conatin the id / unique key
			// of the requested resource. log(request.resource) // 32432
		}
	});
}();