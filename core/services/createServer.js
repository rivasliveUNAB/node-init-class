const axios = require("axios");
const express = require("express");

const app = express();

const createServer = ({ routes, port = 8000 }) => {
  app.get("/", function (req, res) {
    res.send("<h1>Welcome to my API REST");
  });

  app.get("/episodes", async (req, res) => {
    try {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      res.status(200).json({
        data: data?.results || [],
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal server error",
        code: 500,
        errors: e?.response?.data || e?.message || null,
        data: null,
      });
    }
  });

  app.listen(port);
  console.log(`Server is running at http://localhost:${port}`);
};

module.exports = createServer;
