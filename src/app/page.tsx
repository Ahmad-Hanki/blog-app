import NewPost from "@/components/forms/New-Post";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();


  return (
    <main className="max-w-4xl mx-auto my-5">
      <NewPost />
    </main>
  );
}
