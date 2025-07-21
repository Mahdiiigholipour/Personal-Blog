const BlogService = require("../services/blog");

function getArticles(req, res, next) {
  try {
    const articles = BlogService.getArticles();
  } catch (err) {
    next(err);
  }
}

function createArticle(req, res, next) {
  try {
    const { title, publishingDate, content } = req?.body;
    const result = BlogService.createArticle({
      title,
      publishingDate,
      content,
    });
  } catch (err) {
    next(err);
  }
}

function updateArtice(req, res, next) {
  try {
    const { publishingDate } = req?.params;
    const { title, newpublishingDate = publishingDate, content } = req?.body;

    const result = BlogService.updateArticle(publishingDate, {
      title,
      newpublishingDate,
      content,
    });
  } catch (err) {
    next(err);
  }
}

function deleteArticle(req, res, next) {
  try {
    const { publishingDate } = req?.params;
    const result = BlogService.deleteArticle(publishingDate);
  } catch (err) {
    next(err);
  }
}

function adminPage(req, res, next) {
  try {
  } catch (err) {
    next(err);
  }
}

function showArticle(req, res, next) {
  try {
    const { publishingDate } = req?.params;
    const article = BlogService.getArticleByDate(publishingDate);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  adminPage,
  createArticle,
  deleteArticle,
  getArticles,
  showArticle,
  updateArtice,
};
