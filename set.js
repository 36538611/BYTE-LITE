 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID BWM-XMD;;;BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKH0HkolVdNVwaryDgBXHqPEQIGJGLJKDY5b9Pod3V52HOmR6eUklYe2Wttfc7yHJM0Aw1YPgOihLXkKJ2SZsCgSFQqyhCJWBACCkEQ9DMt86bJhQhdXrb1U62+NiRkh4RvMBNLHIm0dxdXftH0Zi8gjsDimp/wsEfAJO94VEnHntyw4pvl4mV30Tddq91bcvz+dEr6PUq7TJHYs1XcG8RIS5xFr8VB5SiEp5mqLEhLr9H3zS1rYj9ders/A3nn7JK3NZsZ7UKcOey2c42Zynvj9Ux3Mrfo2+Zy9jAVvdSKepZUbXw2qtpWeGk2SzUHrYvnCeyWaOrY/lJn+A4Q+EkRBnFtPm27oupIsrW1Dmi4Jy9Tbh0mq7YssmPhueoWm4Pehs+HCC3y35T96WM2TAQO6HZTbZy5XdUa4NGk8E+dfbn7iWrZzVlu5EhG8mvxO3yMyvJ/9EdjsvjCEk4WHfSCM/xkSxchxdqoxwdD/6iJ93si7SWe6THfo++PY7dFO5GOseaXDS3KnWlZe52atR+ckw7jtKdUnZyY7MR+aIPaVX+MR3bKjSTaMq6xmLRbGyfdYXGtYqlYXU765hTK9iT9/p45bjojAw5nJNmbUY3P2JdZdMve4EFw91ixMtTPm/OOyupdV15fbwoQc0kBEPuzoASxZjQElKcZ489QWAADOslCkpEH/ICzsFLw570+7WNj5aubqr+YnZQYQqtJV0SIezI1S2jjkWCV8CAoswDRAgKx5jQvGxMRAiMEQHDv38yIENX+jSuLcdzDIhwSeg6q4pTDsNPVz8PYRDkVUaXTRZo7QKVYMh+bSNKcRaTVscqg2VwwDXSDpASMIzgiaA7A0JU4wC1eGCwu0RqXMxWyswbXN+u6sDmvbilfMiz55V9AGEoB8ILx3HcS1+E0suA5/cvvMAKHBJlnudFwAD80TPtP7+1sBuMcvPMikapxFM/kbG8DbFQzbW6/7DhqT0qUQiGtKwQA/YwSKpilSco+wNuZSi3BXWCRQdqDUEC9rRkop4sIyW/4D49BcP3rzml5WGLJwtTSXfGHGBA+oggbl/eE/pSX5R6oiANhn3+L/Lj0goJi+JHhihgQAbb26DM96ikaU4Qy7bVPqxocUJEIT4RMATarOufg7X+NoFeWl5GI+UtVrRYAV/WffbAM2PhqsLjYKKzO4HmkyKmnSjdxuuDaOElFOXLwLvCuWuvrl7/9V9AWlVsKzvsoDKq1ApbUacMjp2tKJwvG7FzGe1PZtQkEz5EZz9dXK5ccrHltS4a5wrbvrAz+RiOOLvIT/Z4ofv5zXTPjqRcXttqzwj9Wszd8bERHtNNsSiUIK/wSOK5Ljfrz6Ah5hofWV3Zszec7FgD7aSNo1sge2c3Gy8G63KfjmO9vo5o59CP5onXW4TF1Iz1+Nmdj+lw+pjK+NE37x+BizB6DLkPK/7Tsq/ss3fmF4yPsfmbfKnbtZQfeE0ZjNAeajN/HmXCqW9M0NFP0qo27Q3xMLti5U0F7vefDChOkEZ5mYIhIOkeAgacIKHKV++ucIoIhWkBhpzEi7LEipLIgLRRimJJIf1seaC0n86dwP0f8QuIbw4IAAA=

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
