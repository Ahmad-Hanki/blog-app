"use client";

import prisma from "@/db/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";
import { submitAction } from "./header/action";

const FormComment = ({
  userId,
  postId,
}: {
  userId?: string;
  postId: string;
}) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    console.log(userId);
    if (userId) {
      const res = await submitAction(formData, userId, postId);
      console.log(res);
    }
  };

  return (
    <div className="text-black">
      <div className="mt-4 ">
        <form action={onSubmit}>
          <label
            htmlFor="comment"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Add comment
          </label>
          <input
            onChange={handleCommentChange}
            value={comment}
            type="text"
            name="comment"
            id="comment"
            className="w-full py-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400"
            type="submit"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComment;
