import Comments from "@/components/comments";
import FormComment from "@/components/formComment";
import prisma from "@/db/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
interface idProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = async ({ params: { id } }: idProps) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      User: {
        select: { name: true },
      },
    },
  });

  const userId = await getKindeServerSession().getUser();
  return (
    <div className="text-white max-w-4xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold ">{post?.title}</h1>
      <p>{post?.User?.name}</p>
      <div className="mt-4 ">{post?.Content}</div>
      <Comments postId = {id}/>
      <FormComment userId={userId?.id} postId = {id}/>
    </div>
  );
};

export default BlogDetailPage;
