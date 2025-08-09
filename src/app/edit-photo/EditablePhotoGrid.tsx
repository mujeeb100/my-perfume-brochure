"use client";
import { useState } from "react";
import { updatePhotoDetails } from "@/actions";

export default function EditablePhotoGrid() {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [photos, setPhotos] = useState([
    { id: "1", url: "/perfume1.jpg", description: "Summer Collection" },
    // ... more photos
  ]);

  const handleSave = async (id: string, newDesc: string) => {
    await updatePhotoDetails(id, newDesc);
    setPhotos(photos.map(p => 
      p.id === id ? {...p, description: newDesc} : p
    ));
    setEditingId(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="border p-2">
          <img src={photo.url} className="w-full h-48 object-cover" />
          {editingId === photo.id ? (
            <div className="mt-2">
              <input
                defaultValue={photo.description}
                className="border p-1 w-full"
                onBlur={(e) => handleSave(photo.id, e.target.value)}
              />
            </div>
          ) : (
            <div 
              className="mt-2 cursor-pointer" 
              onClick={() => setEditingId(photo.id)}
            >
              {photo.description} (click to edit)
            </div>
          )}
        </div>
      ))}
    </div>
  );
}