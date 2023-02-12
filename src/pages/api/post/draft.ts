import type { NextApiRequest, NextApiResponse } from "next";
import { getPostsDraft } from "@/utils/post/backend";

const getPostsDraftHandle = async (_: NextApiRequest, res: NextApiResponse) => {
  const result = await getPostsDraft();

  return res.status(201).json(result);
};

export default getPostsDraftHandle;
