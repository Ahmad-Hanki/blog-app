import Comments from "@/components/comments";
import FormComment from "@/components/formComment";

const BlogDetailPage = () => {
  return (
    <div className="text-white max-w-4xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold ">Post one</h1>
      <p>Written by: me</p>
      <div className="mt-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed a
        pariatur ullam, nam similique sapiente rem repellat non quis dicta
        explicabo, maiores perferendis quod animi mollitia nihil voluptatibus
        corrupti.
      </div>
      <Comments />
      <FormComment/>
    </div>
  );
};

export default BlogDetailPage;
