const fs = require("fs");
const path = require("path");

async function getArticles() {
  const files = fs.readdirSync("/articles");
  const articles = files.map((filename) => fs.readFileSync(filename, "utf-8"));

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

async function updateArticle(id, data) {}

async function deleteArticle(id) {}

async function adminPage() {}

async function showArticle(id) {}
