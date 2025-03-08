
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

interface Admin {
  [email: string]: boolean;
}

const admin: Admin = {
  "ankitpramanik16688@gmail.com": true,
  "anupdhn@yahoo.co.in": true,
  "ar@makautwb.ac.in": true,
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params) {
      try {
        if (params.user.email && admin[params.user.email]) {
          try {
           await prisma.user.create({
              data: {
                email: params.user.email,
                name: params.user.name||"",
                image: params.user.image||""
              }
            })
          } catch (_error) {
            console.log("can't save the user data on the prisma client",_error)
          }
          
          return true
         }
      }
      catch (error) {
        console.log("can't save the user data on the prisma client", error)
      }
      return false
    }
  }
})
export { handler as GET, handler as POST }