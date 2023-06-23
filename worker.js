import { parentPort } from "worker_threads";

function performTimeConsumingOperation() {
  let limon = 0;

  for (let i = 1; i <= 10000000000; i++) {
    limon = i * i;
  }

  return { limon };
}

parentPort.on("message", () => {
  const result = performTimeConsumingOperation();

  parentPort.postMessage(result);
});
