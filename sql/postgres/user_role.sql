	


	CREATE TABLE wpm."user_role" (
		  id_user integer NOT NULL
		, id_role integer NOT NULL
	  	, CONSTRAINT "user_role_pkey" PRIMARY KEY (id_user, id_role)
	  	, CONSTRAINT "user_role_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "user_role_fk_id_role" FOREIGN KEY (id_role)
	  		REFERENCES wpm."role" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);