const Koa = require("koa");
const Router = require("koa-router");
const compress = require("koa-compress");
const logger = require("koa-logger");
const serve = require("koa-static");
const path = require("path");

const app = new Koa();
const router = new Router();

// Logger
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.use(compress());
app.listen(9000);
console.log("listening on port 9000");

