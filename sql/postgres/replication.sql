
	

	CREATE TABLE wpm."replication" (
		  id serial NOT NULL
		, id_user integer NOT NULL
		, host character varying(128) NOT NULL
		, token character varying(128) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "replication_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "replication_unique_host" UNIQUE (host)
	  	, CONSTRAINT "replication_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);