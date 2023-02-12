import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Post, { PostProps } from "@/components/Post";
import styles from "@/styles/Posts.module.css";

const PostsDraft: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  useEffect(() => {
    fetch("/api/post/draft").then(async (data) => {
      const posts = await data.json();
      setPosts(posts);
    });
  }, []);

  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        <main>
          {!posts && (
            <div className={styles.center}>
              <Loading isLoading />
            </div>
          )}

          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className={styles.post}
                data-testid="draft-post-item-list"
              >
                <Post post={post} />
              </div>
            ))}
        </main>
      </div>
    </Layout>
  );
};

export default PostsDraft;
