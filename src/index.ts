import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "@koa/router";

const app = new Koa();
const port = 5000;

const router = new Router();

router.post("/requests", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = { success: true };
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
