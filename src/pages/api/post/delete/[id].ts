import type { NextApiRequest, NextApiResponse } from "next";
import { deletePostById } from "@/utils/post/backend";

const deletePostByIdHandle = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const postId = req.query.id;

  if (!Array.isArray(postId) && postId) {
    const response = await deletePostById(postId);

    return res.json(response);
  }

  return res.status(500);
};

export default deletePostByIdHandle;
