const Koa = require("koa");
const Router = require("koa-router");
const compress = require("koa-compress");
const cors = require('koa-cors');
const logger = require("koa-logger");
const serve = require("koa-static");
const path = require("path");

const data = require("./data/data");

const app = new Koa();
const router = new Router();
 
app.use(cors());


// Logger
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

// Route /root
router.get("/", async function(ctx) {
  ctx.body = { serverTime: new Date() };
});

// Route /ping
router.get("/ping", async function(ctx) {
  ctx.body = "pong";
});

router.get("/speakers", async function(ctx){
  ctx.body = data.speakers;
});

app.use(compress());
app.listen(9000);
console.log("listening on port 9000");
