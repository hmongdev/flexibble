// contains all the info for the user

import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@types";
import { AdapterUser } from 'next-auth/adapters';

// utility function that gets the user's session based on authOptions
export async function getCurrentUser() {
  const session = await getServerSession(authOptions) as SessionInterface
  return session;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  // jwt: {
  //   encode: ({ secret, token }) => {
      
  //   },
  //   decode: async ({ secret, token }) => {
      
  //   }
  // },
  theme: {
    colorScheme: 'light',
    logo: '/logo.png'
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        // get user from DB if they exist => allows projects to connect to the user
        
        
        // if they don't exist, create a user
        
        // return true
      } catch (error: any) {
        console.log(error);
        return false;
      }
    }
  }
  }