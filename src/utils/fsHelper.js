const fs = require("fs").promises;
const path = require("path");

const articlesDir = path.resolve(process.cwd(), "articles");

async function readArticlesDir() {
  await fs.mkdir(articlesDir, { recursive: true });
  return fs.readdir(articlesDir);
}
async function readArticleFile(filename) {
  const filePath = path.resolve(articlesDir, filename);
  return fs.readFile(filePath, "utf8");
}
