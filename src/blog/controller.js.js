const BlogService = require("./service");

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

function getOneArticle(req, res, next) {
  try {
    const { publishingDate } = req?.params;
    const article = BlogService.getArticleByDate(publishingDate);
  } catch (err) {
    next(err);
  }
}

function dashboardPage(req, res, next) {
  try {
    const articles = BlogService.getArticles();
    res.render("/admin/dashboard", { articles });
  } catch (err) {
    next(err);
  }
}

function addPage(req, res, next) {
  try {
    res.render("/admin/add.ejs", {});
  } catch (err) {
    next(err);
  }
}
function editPage(req, res, next) {
  try {
    const article = BlogService.getArticleByDate(req?.params?.publishingDate);
    res.render("/admin/edit.ejs");
  } catch (err) {
    next(err);
  }
}
module.exports = {
  dashboardPage,
  createArticle,
  deleteArticle,
  getArticles,
  getOneArticle,
  updateArtice,
  addPage,
  editPage,
};
