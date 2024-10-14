const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY`,
ALIVE_MSG: process.env.ALIVE_MSG=`Hi I AM ALIVE NOW👋

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴏꜰꜰɪᴄɪᴀʟ

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴏꜰꜰɪᴄɪᴀʟ☠`,
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/denethhansaka/DENETH-MD-New/blob/main/Images/DENETH-MD.jpg?raw=true",

};
