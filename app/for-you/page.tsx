import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ForYouPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <main>You are logged in!</main>;
}