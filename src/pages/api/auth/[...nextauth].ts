import { query as q } from "faunadb";
import NextAuth from "next-auth";

import Provider from "next-auth/providers";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.GitHub({
      clientId: "04168561b73b05ecfb65",
      clientSecret: "2c7311c99e9c4c81f29c6ad1c3e1186d83076fe0",
      scope: "read:user",
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(q.Index("subscription_by_user_ref"), q.Select("ref", q.Get(q.Match(q.Index("user_by_email"), q.Casefold(session.user.email))))),
              q.Match(q.Index("subscription_by_status"), "active"),
            ])
          )
        );

        return {
          ...session,
          ActiveSubscription: userActiveSubscription,
        };
      } catch {
        return {
          ...session,
          ActiveSubscription: null,
        };
      }
    },
    async signIn(user, account, profile) {
      const { email } = user;

      console.log(user);

      try {
        await fauna.query(
          q.If(
            q.Not(q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))),
            q.Create(q.Collection("users"), { data: { email } }),

            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
