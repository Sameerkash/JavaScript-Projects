import express, { Request, Response, NextFunction } from "express";

import todoroutes from "./routes/todos";

const app = express();

app.use("/todos", todoroutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "error" });
});

app.listen(3000);
