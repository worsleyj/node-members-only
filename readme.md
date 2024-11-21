# Members Only Message Board

## Setup

Create a new PostgreSQL database and set the name in dotenv config. Default database name is "members*only".
To populate the database with tables and dummy values, run the command \_node db/populatedb.js*.

## Environment Variables (.env)

### Place all environment variables in a .env file in the root directory.\

USER=username, where username is your PostgreSQL username.\
PASS=password, where password is your PostgreSQL password.\

Optional\
PORT=num, where num is the port you wish to specify. Default port is 3000.\
DB=name, where name is the name of the PostgreSQL database you created. Default is "members_only".\
