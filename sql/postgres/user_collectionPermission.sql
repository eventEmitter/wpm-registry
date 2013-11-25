	


	CREATE TABLE wpm."user_collectionPermission" (
		  id_user integer NOT NULL
		, id_collectionPermission integer NOT NULL
	  	, CONSTRAINT "user_collectionPermission_pkey" PRIMARY KEY (id_user, id_collectionPermission)
	  	, CONSTRAINT "user_collectionPermission_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "user_collectionPermission_fk_id_collectionPermission" FOREIGN KEY (id_collectionPermission)
	  		REFERENCES wpm."collectionPermission" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);