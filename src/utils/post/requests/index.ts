import Router from "next/router";

/**
 * Publish post by its ID
 */
const publishPostById = async (id: string): Promise<void> => {
  await fetch(`/api/post/publish/${id}`, {
    method: "PUT",
  });

  await Router.push("/");
};

/**
 * Delete post by its ID
 */
const deletePostById = async (id: string): Promise<void> => {
  await fetch(`/api/post/delete/${id}`, {
    method: "DELETE",
  });

  await Router.push("/");
};

export { deletePostById, publishPostById };
