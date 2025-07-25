const {
  writeArticleFile,
  readArticlesDir,
  readArticleFile,
  deleteArticleFile,
} = require("../utils/fsHelper");

async function getArticles() {
  const files = await readArticlesDir();

  const articles = await Promise.all(
    files.map(async (file) => JSON.parse(await readArticleFile(file)))
  );
  return articles;
}

async function createArticle(data) {
  const article = {
    id: data?.publishingDate,
    title: data?.title || "Unknown article",
    publishingDate: data?.publishingDate || Date.now(),
    content: data?.content || "",
  };

  await writeArticleFile(`${article.id}.json`, JSON.stringify(data));
  return article;
}

async function updateArticle(id, data) {
  const filename = `${id}.json`;

  const isExist = await readArticleFile(filename);
  if (!isExist) throw new Error("article not found");

  const updatedArticle = {
    title: data?.title ?? article.title,
    publishingDate,
    content: data?.content ?? article.content,
  };

  await writeArticleFile(`${id}.json`, JSON.stringify(updatedArticle));

  return updatedArticle;
}

async function deleteArticle(id) {
  const filename = `${id}.json`;

  const isExist = await readArticleFile(filename);
  if (!isExist) throw new Error("article not found");

  await deleteArticleFile(filename);
  return true;
}

async function getArticleById(id) {
  const article = JSON.parse(await readArticleFile(`${id}.json`));
  if (!article) throw new Error("not found any article");

  return article;
}

const BlogService = {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
  getArticleById,
};
module.exports = BlogService;
