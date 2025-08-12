import { auth } from "@/auth";

const allowedEmails = ["mujeeb977315@gmail.com", "yasirlehra@gmail.com"];

export default async function AdminPage() {
  const session = await auth();

  if (
    !session ||
    !allowedEmails.includes(session.user?.email ?? "")
  ) {
    return <p className="text-red-500">Access Denied</p>;
  }

  return <h1>Welcome Admin {session.user?.name ?? ""}</h1>;
}
