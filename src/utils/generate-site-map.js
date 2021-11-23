const fs = require("fs");
// async function generateSiteMap() {
//     fs.readFileSync('../public/sitemap.xml')
// }
// Change to your custom URL
const YOUR_URL = "https://hidemyacc.com";
const getDate = new Date().toISOString();


async function generateSiteMap() {
    fs.readFileSync('./public/sitemap.xml')
}

generateSiteMap()
// module.exports = { generateSiteMap }