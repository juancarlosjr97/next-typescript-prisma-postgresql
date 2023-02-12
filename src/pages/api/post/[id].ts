import type { NextApiRequest, NextApiResponse } from "next";
import { getPostById } from "@/utils/post/backend";

const getPostByIdHandle = async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.id;

  if (!Array.isArray(postId) && postId) {
    const response = await getPostById(postId);

    return res.json(response);
  }

  return res.status(500);
};

export default getPostByIdHandle;
