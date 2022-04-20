import { passportAuth } from "blitz"
import db from "db"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          callbackURL:
            process.env.NODE_ENV === "production"
              ? "デプロイ先/api/auth/google/callback"
              : "http://localhost:3004/api/auth/google/callback",
          scope: ["email", "profile"],
        },
        async function (_token, _tokenSecret, profile, done) {
          const email = profile.emails && profile.emails[0]?.value
          const user = await db.user.upsert({
            where: { email },
            create: {
              heart: 1,
              email,
              name: profile.displayName,
            },
            update: { email },
          })
          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: "google",
          }
          done(null, { publicData })
        }
      ),
    },
  ],
})
