const {
  getArticles,
  createArticle,
  adminPage,
  getOneArticle,
  updateArtice,
  deleteArticle,
} = require("./blog/controller.js");
const authMiddleware = require("./middleware/auth");

const router = require("express").Router();

router.get("/home", getArticles);
router.post("/new", createArticle);
router.get("/admin", authMiddleware, adminPage);
router.get("/article/:publishingDate", getOneArticle);
router.put("/edit/:publishingDate", updateArtice);
router.delete("/delete/:publishingDate", deleteArticle);

module.exports = router;
