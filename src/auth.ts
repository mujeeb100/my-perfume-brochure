import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN_EMAILS = ["admin@example.com", "editor@perfume.com"];

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return ADMIN_EMAILS.includes(user.email!);
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Always redirect to home after login
    },
    async session({ session }) {
      session.user.role = ADMIN_EMAILS.includes(session.user.email!) ? "admin" : "user";
      return session;
    }
  }
});