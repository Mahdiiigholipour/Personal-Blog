const fs = require("fs");
const path = require("path");
const { title } = require("process");

async function getArticles() {
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

  const result = fs.writeFileSync(
    `/articles/${article.publishingDate}.json`,
    JSON.stringify(article)
  );

  return result;
}

async function updateArticle(publishingDate, data) {
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

async function deleteArticle(publishingDate) {
  fs.unlinkSync(`/articles/${publishingDate}.json`);

  return true;
}

async function adminPage() {}

async function showArticle(id) {}
