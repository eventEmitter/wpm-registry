	


	CREATE TABLE wpm."package" (
		  id serial NOT NULL
		, name character varying(100) NOT NULL
		, tagline character varying(200) DEFAULT NULL::character varying
		, website character varying(200) DEFAULT NULL::character varying
		, repoisityURL character varying(200) DEFAULT NULL::character varying
		, id_repositoryType integer DEFAULT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "package_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "package_token" UNIQUE (name)
	  	, CONSTRAINT "package_fk_id_repositoryType" FOREIGN KEY (id_repositoryType)
	  		REFERENCES wpm."repositoryType" (id) MATCH SIMPLE
	  		ON UPDATE RESTRICT
	  		ON DELETE RESTRICT
	);