const http = require("http");
const app = require("./src/app");
const { PORT } = require("./src/config/index");

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${config.PORT}`)
);
