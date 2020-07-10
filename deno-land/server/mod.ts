import { serve } from "./deps.ts";
import { dejs } from "./deps.ts";
import { Application, Router } from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", async (ctx: any) => {
  const body = await dejs.renderFileToString(Deno.cwd() + "/course_goals.ejs", {
    title: "My goals",
  });
  ctx.response.body = body;
});

router.post("/add-goal", async (ctx) => {
  const body = await ctx.request.body();
  const newGoal = body.value.get("new-goal");
  console.log(newGoal);
  ctx.response.redirect("/");
});

app.use(async (ctx, next) => {
  console.log("my middleware");
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
