const cors = require("cors");
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const server = express();
const jwt = require("jsonwebtoken");
const express = require("express");

const db = knex(knexConfig.development);

server.use(helmet());
server.use(express.json());
server.use(cors());

function generateToken(user) {
	const payload = {
		...user.username,
		hello: "Welcome",
		department: "IT"
	};

	const JwtOptions = {
		expiresIn: "10m"
	};

	return jwt.sign(payload, jwtSecret, JwtOptions);
}
