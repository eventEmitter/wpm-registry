	


	CREATE TABLE wpm."user_package" (
		  id_user integer NOT NULL
		, id_package integer NOT NULL
	  	, CONSTRAINT "user_package_pkey" PRIMARY KEY (id_user, id_package)
	  	, CONSTRAINT "user_package_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "user_package_fk_id_package" FOREIGN KEY (id_package)
	  		REFERENCES wpm."package" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);