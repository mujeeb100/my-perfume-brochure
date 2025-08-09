// In ALL files (login/page.tsx, edit-photo/page.tsx, etc.)
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function EditPhotoPage() {
  const session = await auth();

  // Redirect unauthenticated users
  if (!session?.user) {
    redirect("/login");
  }

  // Check if user has permission
  const isAllowed = ["admin@example.com", "editor@perfume.com"].includes(
    session.user.email || ""
  );

  if (!isAllowed) {
    return (
      <div className="p-4 text-red-500">
        ⛔ Only approved admins/editors can edit photos.
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Product Photos</h1>
      {/* Your photo editing UI here */}
    </div>
  );
}