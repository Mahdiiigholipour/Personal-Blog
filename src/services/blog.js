const fs = require("fs");
const path = require("path");

async function getArticles() {}

async function createArticle(data) {
  const article = {
    title: data?.title || "Unknown article",
    publishingDate: data?.publishingDate || Date.now(),
    content: data?.content || "",
  };

  const result = fs.writeFile(
    `/articles/${article.publishingDate}.json`,
    JSON.stringify(article),
    (err) => {
      if (err) throw new Error("cant write file!");
      return true;
    }
  );

  return result;
}

async function updateArticle(id, data) {}

async function deleteArticle(id) {}

async function adminPage() {}

async function showArticle(id) {}
