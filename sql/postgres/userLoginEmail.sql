
	

	CREATE TABLE wpm."userLoginEmail" (
		  id_user integer NOT NULL
		, email character varying(250) NOT NULL
		, password character varying(128) DEFAULT NULL::character varying
		, salt character varying(128) DEFAULT NULL::character varying
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "userLoginEmail_pkey" PRIMARY KEY (id_user)
	  	, CONSTRAINT "userLoginEmail_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);