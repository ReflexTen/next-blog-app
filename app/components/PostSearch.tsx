"use client";

import { usePosts } from "@/store";
import { SubmitEventHandler, useState } from "react";

const PostSearch = () => {
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    getPostsBySearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
