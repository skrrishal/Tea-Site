import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'


export const authoption = NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // })
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {

        // Connect to the Database....
        const client = await mongoose.connect("mongodb://localhost:27017/ChaiApp")

        // Check if the user already exists in the database
        const currentUser = User.findOne({ email: email })

        if (!currentUser) {
          // Create a new User
          const newUser = new User({
            email: email,
            usename: profile.username,
            profilepic: profile.avatar_url,
          })
          await newUser.save()
        }

        else {
          user.name = currentUser.username
        }
        return true
      }
    },

    async session({ session, token, user }) {
      const dbUser = await User.find({ email: session.user.email })
      session.user.name = dbUser.usename
      return session
    }
  }

})


export { authoption as GET, authoption as Projects } 