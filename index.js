import express from "express";
import { Worker } from "worker_threads";

const app = express();

app.get("/sync", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", (result) => {
    res.send(result);
  });

  worker.on("error", (err) => {
    console.log(err);
  });

  worker.postMessage("start");
});

app.get("/async", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => console.log("listen 8080"));
