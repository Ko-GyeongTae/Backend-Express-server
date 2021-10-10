import { init, server } from "./server";
import http from 'http';

init(server);

const serverCallback = server;

http.createServer(serverCallback).listen(4000, () => {
  console.log(`Server listening on port ${4000}`);
});