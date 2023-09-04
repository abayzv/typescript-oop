import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../error/error-response";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) return next();

  if (err instanceof ErrorResponse) {
    res.status(err.status).json({ error: err.message }).end();
  } else {
    res.status(500).json({ error: "Internal Server Error" }).end();
  }
};

export { errorMiddleware };
