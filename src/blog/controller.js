const service = require("./service");

async function getArticles(req, res, next) {
  try {
    const articles = await service.getArticles();
    res.render("home.ejs", { articles });
  } catch (err) {
    next(err);
  }
}

async function createArticle(req, res, next) {
  try {
    const { title, publishingDate, content } = req?.body;
    const article = await service.createArticle({
      title,
      publishingDate,
      content,
    });
    res.render("article.ejs", { article });
  } catch (err) {
    next(err);
  }
}

async function updateArticle(req, res, next) {
  try {
    const { id } = req?.params;
    const { title, publishingDate, content } = req?.body;

    const article = await service.updateArticle(id, {
      title,
      publishingDate,
      content,
    });
    res.render("article.ejs", { article });
  } catch (err) {
    next(err);
  }
}

async function deleteArticle(req, res, next) {
  try {
    const { id } = req?.params;
    await service.deleteArticle(id);
    res.redirect("/admin/dashboard");
  } catch (err) {
    next(err);
  }
}

async function getOneArticle(req, res, next) {
  try {
    const { id } = req?.params;
    const article = await service.getArticleById(id);
    res.render("article.ejs", { article });
  } catch (err) {
    next(err);
  }
}

async function dashboardPage(req, res, next) {
  try {
    const articles = await service.getArticles();
    res.render("admin/dashboard.ejs", { articles });
  } catch (err) {
    next(err);
  }
}

function addPage(req, res, next) {
  try {
    res.render("admin/add.ejs", {});
  } catch (err) {
    next(err);
  }
}
async function editPage(req, res, next) {
  try {
    const { id } = req.params;
    const article = await service.getArticleById(id);
    res.render("admin/edit.ejs", { article });
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
  updateArticle,
  addPage,
  editPage,
};
