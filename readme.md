# Members Only Message Board

## Setup

Create a new PostgreSQL database and set the name in dotenv config. Default database name is "members_only".
To populate the database with tables and dummy values, run the command _node db/populatedb.js_.

## Dotenv

PORT=num, where num is the port you wish to specify. Default port is 3000.
dbName=name, where name is the name of the PostgreSQL database you created. Default is "members_only".
