import { Request, Response } from "express";
import { getUser } from "../services/user.service";

export const getUserInfo = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const user = await getUser();
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      email: user.email,
      current_datetime: new Date().toISOString(),
      github_url: user.github_url,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    throw error;
  }
};
