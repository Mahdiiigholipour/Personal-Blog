async function getArticles(req, res, next) {
  try {
    const articles = await BlogService.getArticles();
    res.json(articles);
  } catch (err) {
    next(err);
  }
}

async function createArticle(req, res, next) {
  try {
    const { title, publishingDate, content } = req?.body;
    const result = await BlogService.createArticle({
      title,
      publishingDate,
      content,
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function updateArtice(req, res, next) {
  try {
    const { id } = req?.params;
    const { title, publishingDate, content } = req?.body;

    const result = await BlogService.updateArticle(id, {
      title,
      publishingDate,
      content,
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function deleteArticle(req, res, next) {
  try {
    const { id } = req?.params;
    const result = await BlogService.deleteArticle(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function adminPage(req, res, next) {
  try {
    const result = await BlogService.adminPage();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function showArticle(req, res, next) {
  try {
    const { id } = req?.params;
    const article = await BlogService.showArticle();
    res.json(article);
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
