import waServices from "../service/wa-services";
import { NextFunction, Request, Response } from "express";

const connectToWA = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await waServices.connectToWA(req.body);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await waServices.getStatus(req);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getClientInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await waServices.getClientInfo(req);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const getSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await waServices.getSession(req);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

export default { connectToWA, getStatus, getClientInfo, getSession };
