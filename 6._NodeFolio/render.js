const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

function createPage(path,options = {title: "Nodefolio"}) {

    const page = fs.readFileSync(`${path}`, "utf-8");
    return (nav + page + footer)
    //.replace("%%DOCUMENT_TITLE%%", options ? options.title: "nodemon"); //er options defineret 
    // det er her at css skal tilføjes
    .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio"); //optional chaining
    
}


//key og value er det samme create page
module.exports = {
createPage 
};