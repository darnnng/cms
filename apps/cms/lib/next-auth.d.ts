import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      occupation: string;
    };

    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      occupation: string;
    };

    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
