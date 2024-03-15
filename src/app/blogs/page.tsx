import Link from "next/link";
import prisma from "@/db/client";
const BlogsPage = async () => {
  const posts = await prisma.post.findMany({
    orderBy : {
      createAt: "desc"
    },
    include : {
      User : {
        select:{
          name:true
        }
      }
    }
  })
  return (
    <div className="max-w-4xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link className="bg-white p-4 rounded-md border shadow-md shadow-orange-50 text-black" href={`/blogs/${post.id}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Written by: {post.User?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
