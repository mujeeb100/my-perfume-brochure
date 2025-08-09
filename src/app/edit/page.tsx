// src/app/edit/page.tsx
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useState } from "react";
import { samplePhotos } from "@/data/photos";

// Extend the User type to include 'role'
declare module "next-auth" {
  interface User {
    role?: string;
  }
}

function EditPageContent() {
  const { data: session } = useSession();
  const [photos, setPhotos] = useState(samplePhotos);

  if (!session?.user || session.user?.role !== "admin") {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p>Only admin users can edit photos</p>
      </div>
    );
  }

  const handleUpdate = (id: string, field: string, value: string) => {
    setPhotos(
      photos.map((photo) =>
        photo.id === id ? { ...photo, [field]: value } : photo
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Edit Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="h-64 relative mb-4">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              value={photo.title}
              onChange={(e) => handleUpdate(photo.id, "title", e.target.value)}
              className="w-full p-2 border mb-2"
            />
            <textarea
              value={photo.description}
              onChange={(e) =>
                handleUpdate(photo.id, "description", e.target.value)
              }
              className="w-full p-2 border h-20"
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => console.log("Saved:", photo)}
            >
              Save Changes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EditPage() {
  return (
    <SessionProvider>
      <EditPageContent />
    </SessionProvider>
  );
}
