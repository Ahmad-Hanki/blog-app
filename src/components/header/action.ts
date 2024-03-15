'use server'

import prisma from "@/db/client";
import { revalidatePath } from "next/cache";

export const submitAction = async (formData : FormData, userId:string, postId:string ) => {
    const text = formData.get('comment')?.toString();
    console.log(text)
    if (!userId || !text) return
    console.log(text);
    const newComment = await prisma.comment.create({
      data : {
        userKindeId : userId,
        postId,
        text,
      }
    })
    console.log(newComment);
    revalidatePath('/');
    revalidatePath('/blogs');
  }