import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ADMIN_EMAILS = [
  "mujeeb977315@gmail.com",
  "yasirlehra@gmail.com"
];

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
      // Only allow these two emails to sign in
      return ADMIN_EMAILS.includes(user.email ?? "");
    },
    async redirect({ baseUrl }) {
      return baseUrl; // Redirect to homepage
    },
    async session({ session }) {
      session.user.role = ADMIN_EMAILS.includes(session.user.email ?? "")
        ? "admin"
        : "user";
      return session;
    }
  }
});
