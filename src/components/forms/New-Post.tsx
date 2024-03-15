"use client";

import { FormData } from "@/types/blog";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inputClass =
  "w-full py-2 px-3 border -border-gary-300 rounded-md focus:line-none focus:ring focus:border-blue-300 text-black";

const NewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    content: "",
    title: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Enter The Title"
          className={inputClass}
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <TextareaAutosize
          minRows={5}
          name="content"
          placeholder="Enter The content"
          className={inputClass}
          value={formData.content}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 rounded-md focus:outline-none focus:border-blue-300 w-full  disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewPost;