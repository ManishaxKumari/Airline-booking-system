//single entry point for all the config files
const dotenv = require('dotenv'); //load environment variables from .env file into process.env
dotenv.config();//load environment variables from .env file into process.env

module.exports = {
    PORT: process.env.PORT
};