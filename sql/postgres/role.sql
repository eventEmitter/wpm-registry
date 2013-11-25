
	

	CREATE TABLE wpm."role" (
		  id serial NOT NULL
		, name character varying(100) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "role_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "role_unique_name" UNIQUE (name)
	);