import type { NextApiRequest, NextApiResponse } from "next";
import { createPost } from "@/utils/post/backend";

const createPostHandle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content } = req.body;

  const result = await createPost(title, content);

  return res.status(201).json(result);
};

export default createPostHandle;
