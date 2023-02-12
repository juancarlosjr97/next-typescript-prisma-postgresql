import prisma from "@/prisma";

/**
 * Create post
 */
const createPost = async (title: string, content: string) => {
  return await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
};

/**
 * Delete post by its ID
 */
const deletePostById = async (id: string) => {
  return await prisma.post.delete({
    where: { id },
  });
};

/**
 * Get post by ID
 */
const getPostById = async (id: string) => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

/**
 * Get all draft posts
 */
const getPostsDraft = async () => {
  return await prisma.post.findMany({
    where: { published: false },
  });
};

/**
 * Get all published posts
 */
const getPostsPublished = async () => {
  return await prisma.post.findMany({
    where: { published: true },
  });
};

/**
 * Publish a Post by its ID
 */
const publishPostById = async (id: string) => {
  return await prisma.post.update({
    where: { id },
    data: { published: true },
  });
};

export {
  createPost,
  deletePostById,
  getPostById,
  getPostsDraft,
  getPostsPublished,
  publishPostById,
};
