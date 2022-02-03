const PORT = process.env.PORT || 8080;
const app = require("./app");

const init = () => {
  app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
};

init();
