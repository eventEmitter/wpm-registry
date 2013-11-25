
	

	CREATE TABLE wpm."collection" (
		  id serial NOT NULL
		, name character varying(100) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "collection_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "collection_unique_name" UNIQUE (name)
	);