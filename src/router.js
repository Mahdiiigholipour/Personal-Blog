const {
  getArticles,
  createArticle,
  dashboardPage,
  getOneArticle,
  updateArtice,
  deleteArticle,
  addPage,
  editPage,
} = require("./blog/controller.js");
const authMiddleware = require("./middleware/auth");

const router = require("express").Router();

router.post("/new", createArticle);
router.put("/edit/:publishingDate", updateArtice);
router.delete("/delete/:publishingDate", deleteArticle);
router.get("/home", getArticles);
router.get("/article/:publishingDate", getOneArticle);
router.use(authMiddleware);
router.get("/admin/dashboard", dashboardPage);
router.get("/admin/add", addPage);
router.get("/admin/edit", editPage);

module.exports = router;
