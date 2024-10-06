import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import React from "react";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-6">
        All Blogs From <span>Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 2/4 mx-auto  my-6">
        <i>
          Dive into the fascinating world od quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
