import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "~/lib/prisma";

import bcrypt from "bcrypt";

export default NextAuth({
    // adapter: PrismaAdapter(prisma),
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Email",
                    type: "text",
                    placeholder: "username@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (credentials.username !== undefined && credentials.password !== undefined) {
                    const checkuser = await prisma.customers.findMany({
                        where: {
                            email: credentials.username,
                        },
                    });
                    const hash = checkuser[0].password;
                    const password = credentials.password;
                    const match = await bcrypt.compare(password, hash);
                    if (match) {
                        return {
                            id: checkuser[0].id,
                            email: checkuser[0].email,
                            name: checkuser[0].firstname,
                        };
                    } else {
                        return null;
                    }
                }
                // login failed
                return null;
            },
        }),
    ],
    debug: process.env.NODE_ENV === "development",
    session: {
        // Set to jwt in order to CredentialsProvider works properly
        strategy: "jwt",
    },
    callbacks: {
        jwt: ({ token, user }) => {
            // first time jwt callback is run, user object is available
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id;
                // session.accessToken = token.accessToken
                return session;
            }
            return session;
        },
    },
    secret: process.env.SECRET,
    jwt: {
        secret: process.env.SECRET,
        encryption: true,
    },
    pages: {
        signIn: "/auth/UserLogin",
    },
});
