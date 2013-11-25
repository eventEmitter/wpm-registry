
	

	CREATE TABLE wpm."organization" (
		  id serial NOT NULL
		, name character varying(100) NOT NULL
		, tagline character varying(200) NOT NULL
		, href character varying(200) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "organization_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "organization_token" UNIQUE (name)
	);