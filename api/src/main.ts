import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
//create http server
const server = createServer(app);

//webscoket server
const wss = new WebSocketServer({server})

//Handle connections
wss.on('connection',(ws) =>{
  console.log('Client Connected');

  ws.send('Welcome! You are connected to websocket server.')
})










app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
