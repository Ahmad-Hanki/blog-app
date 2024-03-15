import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/db/client";
export const POST = async (req: NextRequest) => {
  const isAuthenticated = await getKindeServerSession().isAuthenticated();
  const user = await getKindeServerSession().getUser();
  try {
    if (!isAuthenticated) {
      return NextResponse.json(
        { message: " Not Authenticated" },
        { status: 401 }
      );
    }

    const { title, content } = await req.json();

    console.error(title);
    console.error(content);

    const newPost = await prisma.post.create({
      data: {
        title,
        Content: content,
        userKindeId: user?.id,
      },
    });
    console.error(newPost);

    console.log('success');
    return NextResponse.json({newPost}, {status: 200});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: " something went wrong" });
  }
};
