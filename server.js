const http = require("http");
const url = require("url");
const date = require("./modules/date");

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  //res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently:\n ");
  res.write(`${date()}\n`);
  const q = url.parse(req.url, true).query;
  res.write(`${req.url} => ${q.year} - ${q.month} - ${q.day}`);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
