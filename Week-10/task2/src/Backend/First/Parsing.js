const fs = require("fs");
const http = require("http");

let server = http.createServer((req, res) => {
  let url = req.url;
  console.log("enter in /");
  if (url === "/") {
    res.write(`<html>
      <body>
      <form action='/mess' method='POST'>
         <input type='text' name='messss'>
         <button type='submit'>Send</button>
         </input>
         </form>
      </body>
      </html>
      `);
    
  }

  if (url === "/mess" && req.method === "POST") {
    console.log("enter in /mess");
    let body = [];
    req.on("data", (dd) => {
      console.log(dd);
      body.push(dd)
      
    });

    //   console.log(body)

    req.on("end", () => {
      let parseBody = Buffer.concat(body).toString();
      let sms=parseBody.split('=')
      console.log(sms);
      fs.writeFileSync('mess.txt',sms[1])
    });
  }
  res.end();
});
server.listen(4000);
