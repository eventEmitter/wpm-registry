	


	CREATE TABLE wpm."storage" (
		  id serial NOT NULL
		, name character varying(100) NOT NULL
		, config text DEFAULT NULL::text
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "storage_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "storage_unique_name" UNIQUE (name)
	);