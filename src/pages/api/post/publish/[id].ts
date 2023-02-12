import type { NextApiRequest, NextApiResponse } from "next";
import { publishPostById } from "@/utils/post/backend";

const publishPostByIdHandle = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const postId = req.query.id;

  if (!Array.isArray(postId) && postId) {
    const response = await publishPostById(postId);

    return res.json(response);
  }

  return res.status(500);
};

export default publishPostByIdHandle;
