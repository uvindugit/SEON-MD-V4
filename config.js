const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || '', //Put Session-id Here
GITHUB_USERNAME: process.env.GITHUB_USERNAME || '', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '', //Put Your Github Auth Token
REPO_NAME: process.env.REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
