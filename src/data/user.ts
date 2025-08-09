interface User {
  id: string;
  email: string;
  role: "admin" | "editor" | "user";
}

export const users: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: "2",
    email: "editor@perfume.com",
    role: "editor",
  },
];