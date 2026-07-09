import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../utils/response.js";
import { getReportData } from "../services/reportService.js";

export async function reportController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await getReportData({
      page: Number(req.query.page),
      pageSize: Number(req.query.pageSize),
    });

    sendSuccess(
      res,
      data,
      "Reports fetched successfully"
    );
  } catch (error) {
    next(error);
  }
}