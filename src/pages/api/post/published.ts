import type { NextApiRequest, NextApiResponse } from "next";
import { getPostsPublished } from "@/utils/post/backend";

const getPostsPublishedHandle = async (
  _: NextApiRequest,
  res: NextApiResponse
) => {
  const result = await getPostsPublished();

  return res.status(201).json(result);
};

export default getPostsPublishedHandle;
