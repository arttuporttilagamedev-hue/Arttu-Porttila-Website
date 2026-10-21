// Luo contact-config.js .env-tiedoston avaimesta: node make-config.js
const fs = require("fs");
const path = require("path");

const env = fs.readFileSync(path.join(__dirname, ".env"), "utf8");
const match = env.match(/^WEB3FORMS_ACCESS_KEY=(.*)$/m);

if (!match || !match[1].trim()) {
    console.error("WEB3FORMS_ACCESS_KEY puuttuu .env-tiedostosta");
    process.exit(1);
}

fs.writeFileSync(path.join(__dirname, "contact-config.js"), `window.WEB3FORMS_ACCESS_KEY = "${match[1].trim()}";\r\n`);
console.log("contact-config.js luotu");
