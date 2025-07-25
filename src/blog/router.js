const controller = require("./controller.js");
const basicAuth = require("../middleware/basicAuth.js");
const validate = require("../utils/validator.js");
const { param, body } = require("express-validator");

const router = require("express").Router();
// Guest routes
router.get("/", controller.getArticles);
router.get(
  "/article/:id",
  [param("id").isNumeric()],
  validate,
  controller.getOneArticle
);

// Admin routes
router.use(basicAuth);
router.get("/admin/dashboard", controller.dashboardPage);
router
  .route("/admin/add")
  .get(controller.addPage)
  .post(
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
  .get(controller.editPage)
  .put(
    [
      param("id").isNumeric(),
      body("title").optional().notEmpty(),
      body("publishingDate").optional().isNumeric(),
      body("content").optional().notEmpty(),
    ],
    validate,
    controller.updateArticle
  );

router.delete("admin/delete/:id", controller.deleteArticle);

module.exports = router;
