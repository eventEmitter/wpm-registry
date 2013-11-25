	


	CREATE TABLE wpm."role_collectionPermission" (
		  id_role integer NOT NULL
		, id_collectionPermission integer NOT NULL
	  	, CONSTRAINT "role_collectionPermission_pkey" PRIMARY KEY (id_role, id_collectionPermission)
	  	, CONSTRAINT "role_collectionPermission_fk_id_role" FOREIGN KEY (id_role)
	  		REFERENCES wpm."role" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "role_collectionPermission_fk_id_collectionPermission" FOREIGN KEY (id_collectionPermission)
	  		REFERENCES wpm."collectionPermission" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);