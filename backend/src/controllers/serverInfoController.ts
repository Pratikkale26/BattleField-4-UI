import { Request, Response } from "express";
import serverInfoData from "../../data/serverInfoData.json"

export const getServerInfo = (req: Request, res: Response) => {
  res.json(serverInfoData);
};
