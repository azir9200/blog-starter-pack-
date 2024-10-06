import LatestBlogs from "@/components/latestBlogs/page";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  console.log("object", blogs);

  return (
    <>
      <h1 className="text-center text-4xl my-5">Latest Blogs</h1>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
