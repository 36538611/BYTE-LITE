 
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


module.exports = { session: process.env.SESSION_ID BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3rVPiIgF5NOBhBvqIAIipPJpIACSuQid+z47xPs7vR5mHOm561Sl7VXrbX2fgNJigukoA5M30CW4xqWqF+WXYbAFIiV76McDIEHSwimYDHny9blUAr9i9c6ZUcFKWT89Z3ij/I8btakuBbpKpZj+RU8hiCrnCt2fwOoDmSx0k6Jjr2JhHWvWJpLhFthQusRfR4Ro9S0PXarM4TwCh49IsQ5TgI5C1GMcnhVUKdBnH+P/m0133IZpmB+W7cZRTbEmFKZBOLOb7dhKO4JxdIu27udmN+jv66PgcLaWIbQjDWV59vRXSRnttqOZl14GFvxzT4a6cQwuHf6BQ4S5K08lJS47L6tOyORPlTtQRweSJXJuzueUNT8olm7wnGOS63aRLuF4NxWcvo94ish0U4zSkZyypuco/hYIglSvUiJv5cQddhQM+F0dC+JvvqZuJZ/ZiX6P7pzyvJazenJOFITSxGwo3UzFY/2il970urg2I6SxNDUtEj/Hv2tbt6ERaKfPfkA61BbZkZWUci3woGUhEirhdT3UnUxH6df9GFZ5b9jadKB59SSeirWynmRUGQRrJJ0S81Pu5Uaj2x24Xa2Rhsqq6m30whZ1enWDjRpVUrEqZKrll/ur5F71EaTyNS7bBuqrRC8Pn8UoW7lgen4MQQ5CnBR5rDEafLc4+khgF5tIDdH5VNesCfywMkycp/qzEIcYEovgrsd6fZFTrzkKpIj6h6bXOdZ0SsYgixPXVQUyFviokzzbouKAgaoANM//xqCBLXlu3F9OWo8BD7Oi9JMquyaQu/T1c9D6LpplZRGl7hSv0A5mBJf26gscRIUvY5VAnM3xDWSQlgWYOrDa4EeQ+ChGruoxwNj4e8NFi1FPx+tZbBgxTVEYdNTDtPk/QqHaNJjWPRCOtB7oVlIvTgTznmhCdJDFDdmHM8BQ4A/eqZ/80sLlSpXJXlj0Ndaq+tzF7GFqJWsZ46bpw3v2qMceWBa5hUaAge6UZUd0gglvwvwybYnGql1dF5fjne1ieSV3R4np5P8E+67p2D69jWnpNTr8Tbn8dE66RwYgvgZQdz/nJzQLM2wJDNh+SnJ/VH8aHohYZb9SFAJhiCB/W2Q9yU+9O8fe6iE+FqAKZCUi31zzZm8ZYPAaRYLIQgEKRDAl1+fwX8Plneo8NJdzYjzpExXWVAO/PgUmCGzwwZkuIY/tnCz1w7tkX79F5Bemtak5/um5IiFwYtlwxzuYpcRhuvbbjSbd7uri7lFGu48nqHYCA143SAEBO/EAXsKSe72XXveh9YmgKlAn2cz0hrNmte+2ntufi62ScVNs5EmYnqRKIsrjcIxknCCLnKkdRgZGRmsux3P0triEja8u6pj40C2jSIvlmSjc+FG9n1n0LEjbl7lG6k5WFD8aMnnSLh+jGL8bJa3j5T5GD0n24f+/+nTV+CJx/AnjI9Z+YtQiSeTTUNKEvgFcqCk2Bs/mVzp+Qpd7Ciu6q1mFUdMHAjOqsDj8dcQZFdY+mkegykoYgeCIbjCohS+GvaAY1SUMM7AdMxSDM0SzJh//AMSw4i/5gcAAA==

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
