import React, { useState } from "react";
import Layout from "@/components/Layout";
import Router from "next/router";
import styles from "@/styles/Draft.module.css";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const body = { title, content };

    await fetch("/api/post/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    await Router.push("/post/drafts");
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Create Draft Post</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            data-testid="create-post-title-field"
          />

          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            data-testid="create-post-content-field"
          />

          <input
            disabled={!content || !title}
            type="submit"
            value="Create"
            data-testid="create-post-submit-button"
          />

          <input
            className={styles.black}
            type="button"
            value="Cancel"
            onClick={() => Router.push("/")}
            data-testid="create-post-cancel-button"
          />
        </form>
      </div>
    </Layout>
  );
};

export default Draft;
