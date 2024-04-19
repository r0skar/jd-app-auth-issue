import { type SolidAuthConfig } from "@solid-mediakit/auth";

declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    {
      id: "outseta-oauth",
      name: "Outseta",
      type: "oidc",
      issuer: `https://${process.env.NEXT_PUBLIC_OUTSETA_DOMAIN}`,
      // The `pkce` suffix is required for the Outseta provider
      // to support the Proof Key for Code Exchange (PKCE) flow.
      clientId: `${process.env.OUTSETA_CLIENT_ID}.pkce`,
      clientSecret: process.env.OUTSETA_CLIENT_SECRET,
    }
  ],
  debug: true,
};
