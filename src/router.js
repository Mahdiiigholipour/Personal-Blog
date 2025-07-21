const router = require("express").Router();

router.get("/home");
router.post("/new");
router.get("/admin");
router.get("/article/:id");
router.put("/edit/:id");
router.delete("/delete/:id");

module.exports = router;
