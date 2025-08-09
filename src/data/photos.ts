export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

export const samplePhotos: Photo[] = [
  {
    id: "1",
    url: "/perfume1.jpg",
    title: "Summer Breeze",
    description: "Fresh floral scent for summer days"
  },
  {
    id: "2",
    url: "/perfume2.jpg",
    title: "Winter Myst",
    description: "Warm woody fragrance for cold nights"
  },
  {
    id: "3",
    url: "/perfume3.jpg",
    title: "Spring Bloom",
    description: "Light fruity aroma for spring mornings"
  }
];