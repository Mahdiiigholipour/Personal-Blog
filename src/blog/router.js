const controller = require("./controller.js");
const basicAuth = require("../middleware/basicAuth.js");
const validate = require("../utils/validator.js");
const { param, body } = require("express-validator");

const router = require("express").Router();
// Guest routes
router.get("/", controller.getArticles);
router.get(
  "/article/:id",
  [param("id").notEmpty()],
  validate,
  controller.getOneArticle
);

// Admin routes
router.get("/admin/dashboard", basicAuth, controller.dashboardPage);
router
  .route("/admin/add")
  .get(basicAuth, controller.addPage)
  .post(
    basicAuth,
    [
      body("title").notEmpty(),
      body("publishingDate").notEmpty(),
      body("content").notEmpty(),
    ],
    validate,
    controller.createArticle
  );

router
  .route("/admin/edit/:id")
  .get(basicAuth, controller.editPage)
  .post(
    basicAuth,
    [
      param("id").isNumeric(),
      body("title").optional().notEmpty(),
      body("publishingDate").optional().isNumeric(),
      body("content").optional().notEmpty(),
    ],
    validate,
    controller.updateArticle
  );

router.post("/admin/delete/:id", basicAuth, controller.deleteArticle);

module.exports = router;
