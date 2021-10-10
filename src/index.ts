import { init, server } from "./server";
import http from 'http';

init(server);

const serverCallback = server;

http.createServer(serverCallback).listen(80, () => {
  console.log(`Server listening on port ${80}`);
});