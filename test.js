const {
  createArticle,
  deleteArticle,
  updateArticle,
  getArticleByDate,
  getArticles,
} = require("./src/services/blog");

// const res1 = createArticle({ title: "mahdi", content: "188" });
// const res2 = createArticle({ title: "hamed", content: "192" });

console.log(getArticles());
