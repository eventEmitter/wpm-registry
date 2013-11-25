
	

	CREATE TABLE wpm."repositoryType" (
		  id serial NOT NULL
		, name character varying(128) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "repositoryType_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "repositoryType_unique_host" UNIQUE (name)
	);