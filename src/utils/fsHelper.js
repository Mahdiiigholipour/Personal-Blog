const fs = require("fs").promises;
const path = require("path");

const articlesDir = path.resolve(process.cwd(), "articles");
async function readArticlesDir() {
  await fs.mkdir(articlesDir, { recursive: true });
  return fs.readdir(articlesDir);
}
