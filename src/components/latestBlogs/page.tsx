import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-6">
        Latest Blogs From <span>Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 2/4 mx-auto ">
        <i>
          Dive into the fascinating world od quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {" "}
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}{" "}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {" "}
        {blogs.slice(1, 4).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}{" "}
      </div>
    </div>
  );
};

export default LatestBlogs;
