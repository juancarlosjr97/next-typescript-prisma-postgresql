import { Post } from "@prisma/client";
import {
  createPost,
  deletePostById,
  getPostById,
  getPostsDraft,
  getPostsPublished,
  publishPostById,
} from ".";
import { prismaMock } from "@/../prisma/mock";

describe("Post requests", () => {
  test("Create post", async () => {
    const post = {
      content: "test-create",
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
      published: false,
      title: "test-create",
      updatedAt: new Date().toISOString(),
    } as unknown as Post;

    prismaMock.post.create.mockResolvedValue(post);

    const response = await createPost(post.title, post.content || "");

    expect(response).toEqual(post);
  });

  test("Delete post by id", async () => {
    const post = {
      content: "test-delete",
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
      published: true,
      title: "test-delete",
      updatedAt: new Date().toISOString(),
    } as unknown as Post;

    prismaMock.post.delete.mockResolvedValue(post);

    const response = await deletePostById(post.id);

    expect(response).toEqual(post);
  });

  test("Get post by id", async () => {
    const post = {
      content: "test-delete",
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
      published: true,
      title: "test-delete",
      updatedAt: new Date().toISOString(),
    } as unknown as Post;

    prismaMock.post.findUnique.mockResolvedValue(post);

    const response = await getPostById(post.id);

    expect(response).toEqual(post);
  });

  test("Get post with draft status", async () => {
    const posts = [
      {
        content: "test-draft",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-draft-1",
        updatedAt: new Date().toISOString(),
      },
      {
        content: "test-draft",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-draft-2",
        updatedAt: new Date().toISOString(),
      },
      {
        content: "test-draft",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-draft-3",
        updatedAt: new Date().toISOString(),
      },
    ] as unknown as Post[];

    prismaMock.post.findMany.mockResolvedValue(posts);

    const response = await getPostsDraft();

    expect(response).toEqual(posts);
  });

  test("Get post with published status", async () => {
    const posts = [
      {
        content: "test-published",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-published-1",
        updatedAt: new Date().toISOString(),
      },
      {
        content: "test-published",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-published-2",
        updatedAt: new Date().toISOString(),
      },
      {
        content: "test-published",
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
        published: false,
        title: "test-published-3",
        updatedAt: new Date().toISOString(),
      },
    ] as unknown as Post[];

    prismaMock.post.findMany.mockResolvedValue(posts);

    const response = await getPostsPublished();

    expect(response).toEqual(posts);
  });

  test("Publish post by id", async () => {
    const post = {
      content: "draft-to-publish",
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
      published: true,
      title: "draft-to-publish",
      updatedAt: new Date().toISOString(),
    } as unknown as Post;

    prismaMock.post.update.mockResolvedValue(post);

    const response = await publishPostById(post.id);

    expect(response).toEqual(post);
  });
});
