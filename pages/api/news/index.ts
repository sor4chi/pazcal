import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  res.statusCode = 200;
  const newsList = await prisma.news.findMany({
    include: {
      category: true,
    },
  });
  res.json(newsList);
}
