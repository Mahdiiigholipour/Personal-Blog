const {
  getArticles,
  createArticle,
  dashboardPage,
  getOneArticle,
  updateArticle,
  deleteArticle,
  addPage,
  editPage,
} = require("./blog/controller.js");
const authMiddleware = require("./middleware/auth");

const router = require("express").Router();

router.get("/home", getArticles);
router.get("/article/:publishingDate", getOneArticle);

router.use(authMiddleware);
router.get("/admin/dashboard", dashboardPage);
router.route("/admin/add").get(addPage).post(createArticle);
router.route("/admin/edit/:publishingDate").get(editPage).put(updateArticle);
router.delete("admin/delete/:publishingDate", deleteArticle);

module.exports = router;
