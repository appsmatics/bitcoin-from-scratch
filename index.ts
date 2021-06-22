
import http from 'http';
import express from 'express'
import {Request, Response} from 'express'

const app = express();

app.get('/', (req:Request, res:Response) => {
  res.send('Hello from Express + TypeScript Server');
})

/**
 * Create HTTP server.
 */
 const server = http.createServer(app);
 server.on('listening', onListening);

 function onListening() {
  const addr = server.address();
  if (!addr) {
    process.exit(1)
  }
  const bind = (typeof addr === 'string')
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.debug('Listening on ' + bind);
}

const port = process.env.SERVER_PORT || 8000;

server.listen(port)
