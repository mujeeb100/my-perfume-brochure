"use server";
import { revalidatePath } from "next/cache";

export async function updatePhotoDetails(id: string, description: string) {
  // In a real app, save to database here
  console.log(`Updating photo ${id} with description: ${description}`);
  
  // Revalidate the cache
  revalidatePath("/");
}