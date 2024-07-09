const express = require("express");
const tokenRoutes = require("./routes/rotues");
const { handleError } = require("./utils/error_handler");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/tokens", tokenRoutes);

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});