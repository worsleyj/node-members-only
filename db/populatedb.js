const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name varchar(255),
last_name varchar(255),
username varchar(255),
password varchar(255),
member_status varchar(255));

INSERT INTO users (first_name, last_name, username, password, member_status) 
VALUES 
('john', 'doe', 'jdoe@gmail.com', 'pass', 'member');

CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title varchar(255),
timestamp TIMESTAMP, 
text varchar(255),
created_by varchar(255));

INSERT INTO messages (title, timestamp, text, created_by) 
VALUES 
('sample text', '1970-01-01 00:00:00', 'bottom text', 'john');
`;

const dbName = process.env.dbName || "members_only";

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:postgres@localhost:5432/" + dbName,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
