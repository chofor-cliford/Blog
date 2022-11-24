import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/client";
import { uuid } from "uuidv4";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json("Hello World");
}
