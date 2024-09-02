import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshToken = async (token: JWT): Promise<JWT> => {
  const result = await fetch(process.env.BACKEND_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refreshToken}`
    }
  });

  const response = await result.json();

  return {
    ...token,
    backendTokens: response
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email"
        },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, request) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { email, password } = credentials;

        const result = await fetch(process.env.BACKEND_URL + "/auth/signin", {
          method: "POST",
          body: JSON.stringify({
            email,
            password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (result.status === 401) {
          console.log(result.statusText);
          return null;
        }

        return await result.json();
      }
    })
  ],
  callbacks: {
    //user is the whole object received from backend, object containing both user properties and backend tokens
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      if (Date.now() < token.tokens.expiresIn) {
        return token;
      }
      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
