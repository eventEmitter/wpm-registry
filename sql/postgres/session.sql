
	

	CREATE TABLE wpm."session" (
		  id serial NOT NULL
		, id_user integer NOT NULL
		, token character varying(128) DEFAULT NULL::character varying
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "session_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "session_unique_token" UNIQUE (token)
	  	, CONSTRAINT "session_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);