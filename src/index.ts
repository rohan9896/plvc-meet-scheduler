import express from "express";
import http from "http";
import ServerConfig from "./config/serverConfig";

const app = express();

const server = http.createServer(app);

server.listen(ServerConfig.PORT, () => {
  console.log(`Server is up and running on Port ${ServerConfig.PORT}`);
});
