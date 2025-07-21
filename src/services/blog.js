const fs = require("fs");
const path = require("path");
const { title } = require("process");

function getArticles() {
  const files = fs.readdirSync("/articles");
  const articles = files.map((filename) =>
    JSON.parse(fs.readFileSync(filename, "utf-8"))
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
  const article = JSON.parse(
    fs.readFileSync(`/articles/${publishingDate}.json`)
  );
  if (!article) throw new Error("article not found");

  const updatedArticle = {
    title: data?.title ?? article.title,
    publishingDate,
    content: data?.content ?? article.content,
  };

  fs.writeFileSync(
    `/articles/${publishingDate}.json`,
    JSON.stringify(updatedArticle)
  );

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
  const article = JSON.parse(
    fs.readFileSync(`/articles/${publishingDate}.json`)
  );
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
