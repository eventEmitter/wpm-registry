	


	CREATE TABLE wpm."file" (
		  id serial NOT NULL
		, id_storage integer NOT NULL
		, "path" character varying(250) NOT NULL
		, created timestamp without time zone DEFAULT LOCALTIMESTAMP NOT NULL
		, updated timestamp without time zone
		, deleted timestamp without time zone
	  	, CONSTRAINT "file_pkey" PRIMARY KEY (id)
	  	, CONSTRAINT "file_path" UNIQUE (path)
	  	, CONSTRAINT "file_fk_id_storage" FOREIGN KEY (id_storage)
	  		REFERENCES wpm."storage" (id) MATCH SIMPLE
	  		ON UPDATE RESTRICT
	  		ON DELETE RESTRICT
	);