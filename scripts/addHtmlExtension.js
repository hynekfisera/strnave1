// scripts/addHtmlExtension.js
const fs = require("fs");
const path = require("path");

function addHtmlExtension(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      addHtmlExtension(fullPath);
    } else if (path.extname(fullPath) === "") {
      // Přejmenuje soubor na .html
      fs.renameSync(fullPath, fullPath + ".html");
    }

    // Nahrazení href odkazů pouze v <a> tagu v HTML souborech
    if (file.endsWith(".html")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const updatedContent = content.replace(/<a\s+[^>]*href="\/(.*?)"/g, '<a href="/$1.html"');
      fs.writeFileSync(fullPath, updatedContent, "utf-8");
    }
  });
}

// Spustí funkci pro přidání .html přípon ve složce 'out'
addHtmlExtension(path.join(__dirname, "../out"));
