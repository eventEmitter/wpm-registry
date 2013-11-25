	


	CREATE TABLE wpm."organization_package" (
		  id_organization integer NOT NULL
		, id_package integer NOT NULL
	  	, CONSTRAINT "organization_package_pkey" PRIMARY KEY (id_organization, id_package)
	  	, CONSTRAINT "organization_package_fk_id_organization" FOREIGN KEY (id_organization)
	  		REFERENCES wpm."organization" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "organization_package_fk_id_package" FOREIGN KEY (id_package)
	  		REFERENCES wpm."package" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);