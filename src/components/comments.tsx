import prisma from "@/db/client";

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      User: true,
    },
  });

  return (
    <div className="mt-8 ">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4 bg-slate-300 p-2 text-black">
            <div className="flex items-center mb-2 ">
              <div className="text-blue-500 font-bold mr-2 ">{comment.User?.name}</div>
              <div className="text-gary-500 ">{comment.createAt.toString()}</div>
            </div>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
