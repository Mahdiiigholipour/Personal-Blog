const fs = require("fs");
const path = require("path");

function getArticles() {
  const dirPath = path.join(process.cwd(), "articles");
  const files = fs.readdirSync(dirPath);
  console.log("readdir passed");
  const articles = files.map((filename) =>
    JSON.parse(fs.readFileSync(path.join(dirPath, filename)))
  );

  return articles;
}

function createArticle(data) {
  const article = {
    title: data?.title || "Unknown article",
    publishingDate: data?.publishingDate || Date.now(),
    content: data?.content || "",
  };
  const filePath = path.join(
    process.cwd(),
    "articles",
    `${article.publishingDate}.json`
  );
  const result = fs.writeFileSync(filePath, JSON.stringify(article));

  return result;
}

function updateArticle(publishingDate, data) {
  const filePath = path.join(
    process.cwd(),
    "articles",
    `${publishingDate}.json`
  );
  const article = JSON.parse(fs.readFileSync(filePath));
  if (!article) throw new Error("article not found");

  const updatedArticle = {
    title: data?.title ?? article.title,
    publishingDate,
    content: data?.content ?? article.content,
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedArticle));

  return updatedArticle;
}

function deleteArticle(publishingDate) {
  const filePath = path.join(
    process.cwd(),
    "articles",
    `${publishingDate}.json`
  );
  fs.unlinkSync(filePath);

  return true;
}

function getArticleByDate(publishingDate) {
  const filePath = path.join(
    process.cwd(),
    "articles",
    `${publishingDate}.json`
  );
  const article = JSON.parse(fs.readFileSync(filePath));
  if (!article) throw new Error("not found any article");

  return article;
}

const BlogService = {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
  getArticleByDate,
};
module.exports = BlogService;
