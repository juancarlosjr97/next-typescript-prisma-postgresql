import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Post, { PostProps } from "@/components/Post";
import styles from "@/styles/Posts.module.css";

const PostsPublished: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  const [isEmptyPosts, setEmptyPosts] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/post/published").then(async (data) => {
      const posts = (await data.json()) as PostProps[];
      setPosts(posts);

      if (!posts.length) {
        setEmptyPosts(true);
      }
    });
  }, []);

  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        <main>
          {isEmptyPosts && (
            <div className={styles.center}>Posts published not found</div>
          )}

          {!posts && (
            <div className={styles.center}>
              <Loading isLoading />
            </div>
          )}

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post}>
                <Post post={post} />
              </div>
            ))}
        </main>
      </div>
    </Layout>
  );
};

export default PostsPublished;
