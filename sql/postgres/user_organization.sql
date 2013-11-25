	


	CREATE TABLE wpm."user_organization" (
		  id_user integer NOT NULL
		, id_organization integer NOT NULL
	  	, CONSTRAINT "user_organization_pkey" PRIMARY KEY (id_user, id_organization)
	  	, CONSTRAINT "user_organization_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "user_organization_fk_id_organization" FOREIGN KEY (id_organization)
	  		REFERENCES wpm."organization" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);