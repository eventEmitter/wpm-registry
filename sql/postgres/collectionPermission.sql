
	

	CREATE TABLE wpm."collectionPermission" (
		  id serial NOT NULL
		, id_collection integer NOT NULL
		, read BOOLEAN NOT NULL DEFAULT FALSE
		, write BOOLEAN NOT NULL DEFAULT FALSE
		, execute BOOLEAN NOT NULL DEFAULT FALSE
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "collectionPermission_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "collectionPermission_fk_id_user" FOREIGN KEY (id_collection)
	  		REFERENCES wpm."collection" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);