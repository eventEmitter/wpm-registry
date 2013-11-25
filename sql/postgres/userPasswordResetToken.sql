
	

	CREATE TABLE wpm."userPasswordResetToken" (
		  id_user integer NOT NULL
		, token character varying(128) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, validated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "userPasswordResetToken_pkey" PRIMARY KEY (id_user)
	  	, CONSTRAINT "userPasswordResetToken_fk_id_user" FOREIGN KEY (id_user)
	  		REFERENCES wpm."user" (id) MATCH SIMPLE
	  		ON UPDATE CASCADE
	  		ON DELETE CASCADE
	);