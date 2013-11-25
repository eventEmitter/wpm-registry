
	

	CREATE TABLE wpm."userProfile" (
		  id_user integer NOT NULL
		, nickname character varying(100) DEFAULT NULL::character varying
		, firstName character varying(100) DEFAULT NULL::character varying
		, lastName character varying(100) DEFAULT NULL::character varying
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
	  	, CONSTRAINT "userProfile_pkey" PRIMARY KEY (id_user)
	  	, CONSTRAINT "userProfile_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);