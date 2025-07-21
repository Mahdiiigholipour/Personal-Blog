const fs = require("fs");
const path = require("path");

async function getArticles() {
  const articles = fs.readdir("/articles", (err, files) => {
    if (err) throw new Error("some issue when read article directory!");
    const temp = files.map((filename) => {
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) throw new Error("some issue when read files in article!");
        return data;
      });
    });
  });

  return articles;
}

function createArticle(data) {
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
