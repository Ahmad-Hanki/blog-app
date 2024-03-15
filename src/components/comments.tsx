const Comments = () => {
  return (
    <div className="mt-8 ">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        <li className="mb-4 bg-slate-300 p-2 text-black">
          <div className="flex items-center mb-2 ">
            <div className="text-blue-500 font-bold mr-2 ">Me</div>
            <div className="text-gary-500 ">date</div>
          </div>
          <p>Wow awsome bro</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
