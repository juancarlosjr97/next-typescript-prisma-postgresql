import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import styles from "@/components/Post.module.css";
import { Post as PostModel } from "@prisma/client";

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div
      className={styles.post}
      onClick={() => Router.push(`/post/${post.id}`)}
    >
      <h2>{post.title}</h2>
      <ReactMarkdown>{post.content || ""}</ReactMarkdown>
    </div>
  );
};

export type PostProps = PostModel;

export default Post;
