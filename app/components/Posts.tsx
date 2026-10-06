"use client";

import { useShallow } from "zustand/react/shallow";
import Link from "next/link";
import { useEffect } from "react";
import { usePosts } from "@/store";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    useShallow((state) => [state.posts, state.loading, state.getAllPosts]),
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
