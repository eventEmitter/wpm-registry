	


	CREATE TABLE wpm."packageVersion" (
		  id serial NOT NULL
		, id_package integer NOT NULL
		, id_file integer DEFAULT NULL
		, semver character varying(100) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "packageVersion_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "packageVersion_unique_multi" UNIQUE (id_package, semver)
	  	, CONSTRAINT "packageVersion_fk_id_package" FOREIGN KEY (id_package)
	  		REFERENCES wpm."package" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	  	, CONSTRAINT "packageVersion_fk_id_file" FOREIGN KEY (id_file)
	  		REFERENCES wpm."file" (id) MATCH SIMPLE
	  		ON UPDATE RESTRICT
	  		ON DELETE RESTRICT
	);