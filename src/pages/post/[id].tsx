import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Post.module.css";
import { GetServerSideProps } from "next";
import { PostProps } from "@/components/Post";
import { deletePostById, publishPostById } from "@/utils/post/requests";

interface IPost {
  id: string;
}

const Post: React.FC<IPost> = ({ id }) => {
  const [post, setPost] = useState<PostProps | null>(null);

  const [postFound, setPostFound] = useState<boolean>(true);

  useEffect(() => {
    fetch(`/api/post/${id}`).then(async (data) => {
      let post = (await data.json()) as PostProps | null;

      if (post) {
        if (!post.published) {
          post.title = `${post.title} (Draft)`;
        }

        setPost(post);
      } else {
        setPostFound(false);
      }
    });
  }, [id]);

  return (
    <Layout>
      <div>
        {!postFound && <div className={styles.center}>Post not found</div>}
        {!post && postFound && (
          <div className={styles.center}>
            <Loading isLoading />
          </div>
        )}

        {post && (
          <>
            <h2 data-testid="post-title-field">{post.title}</h2>
            <ReactMarkdown>{post.content || ""}</ReactMarkdown>
            {!post.published && (
              <button
                className={styles.button}
                onClick={() => publishPostById(post.id)}
                data-testid="post-publish-button"
              >
                Publish
              </button>
            )}
            <button
              className={styles.button}
              onClick={() => deletePostById(post.id)}
              data-testid="post-delete-button"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Array.isArray(context.params?.id)
    ? context.params?.id[0]
    : context.params?.id;

  return { props: { id } };
};

export default Post;
